import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.services';
import { Todo } from '../../models/todo.models';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTimepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css',
})
export class SetupComponent implements OnInit {
  todoForm: FormGroup;

  readonly todoService = inject(TodoService);
  readonly router = inject(Router);
  readonly formBuilder = inject(FormBuilder);

  constructor() {
    this.todoForm = this.formBuilder.group({
      text: ['', Validators.required],
      notepad: [false, Validators.required],
      urls: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    const updateId = this.todoService.todoUpdateId();
    const todos = this.todoService.todos();
    const todo = todos.find((t) => t.id === updateId);

    if (todo) {
      this.todoForm = this.formBuilder.group({
        text: [todo.text, Validators.required],
        notepad: [todo.notepad, Validators.required],
        urls: this.formBuilder.array([]),
      });

      const urlsArray = this.todoForm.get('urls') as FormArray;
      todo.urls.forEach((url) => {
        urlsArray.push(
          this.formBuilder.group({
            link: [url.link, Validators.required],
            name: [url.name, Validators.required],
          })
        );
      });
    }
  }

  get urls(): FormArray {
    return this.todoForm.get('urls') as FormArray;
  }

  removeFieldUrl(index: number) {
    this.urls.removeAt(index);
  }

  addFieldUrl() {
    const fieldGroup = this.formBuilder.group({
      link: [''],
      name: [''],
    });
    this.urls.push(fieldGroup);
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const todo: Todo = this.todoForm.value;

      this.todoService.add(todo);

      this.todoForm.reset();
      this.router.navigate(['/']);
    }
  }
}
