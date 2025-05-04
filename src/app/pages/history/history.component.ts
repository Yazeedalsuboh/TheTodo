import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.services';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [MatChipsModule, CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  todoService = inject(TodoService);
}
