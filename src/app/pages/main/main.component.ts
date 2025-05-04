import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.services';
import { TodoComponent } from './components/todo/todo.component';
import { BarComponent } from './components/bar/bar.component';

@Component({
  selector: 'app-main',
  imports: [BarComponent, TodoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.get();
  }
}
