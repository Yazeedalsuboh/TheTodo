import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.services';
import { Todo } from '../../models/todo.models';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipLinkComponent } from '../../components/mat-chip-link/mat-chip-link.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-main',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatChipLinkComponent,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  todoService = inject(TodoService);

  todo = signal<Todo>({
    id: 0,
    text: 'No Todos added yet!',
    notepad: false,
    done: false,
    urls: [],
  });

  checkTodo() {
    this.todoService.check(this.todoService.findIndex(this.todo().id));
    this.todo.set(this.todoService.get());
  }

  ngOnInit(): void {
    this.todo.set(this.todoService.get());
  }
}
