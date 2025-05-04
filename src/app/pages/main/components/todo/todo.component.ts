import { Component, inject } from '@angular/core';
import { TodoService } from '../../../../services/todo.services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipLinkComponent } from '../../../../components/mat-chip-link/mat-chip-link.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo',
  imports: [MatFormFieldModule, MatChipLinkComponent, MatInputModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoService = inject(TodoService);
}
