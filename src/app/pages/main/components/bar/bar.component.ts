import { Component, inject } from '@angular/core';
import { TodoService } from '../../../../services/todo.services';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {
  todoService = inject(TodoService);

  checkTodo() {
    this.todoService.check(
      this.todoService.findIndex(this.todoService.todo().id)
    );
    this.todoService.get();
  }
}
