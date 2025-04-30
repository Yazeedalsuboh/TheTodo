import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../../../services/todo.services';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from '../../../../models/todo.models';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-menu',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './edit-menu.component.html',
  styleUrl: './edit-menu.component.css',
})
export class EditMenuComponent {
  readonly todoService = inject(TodoService);
  readonly router = inject(Router);

  @Input({ required: true }) index!: number;
  @Input({ required: true }) todo!: Todo;

  update(id: number) {
    this.todoService.todoUpdateId.set(id);
    this.router.navigate(['/setup']);
  }
}
