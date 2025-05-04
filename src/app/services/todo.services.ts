import { Injectable, signal } from '@angular/core';
import { History, Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = signal<Todo[]>([]);

  todo = signal<Todo>({
    id: 0,
    text: 'Your done for today',
    notepad: false,
    done: false,
    urls: [],
  });

  history = signal<History>({
    today: [],
  });

  todoUpdateId = signal<number>(0);

  findIndex(id: number) {
    return this.todos().findIndex((todo) => todo.id === id);
  }

  getToday() {
    const tomorrow = new Date();
    const today = tomorrow.toISOString().split('T')[0];
    return today;
  }

  storeToLS() {
    const today = this.getToday();
    const stored = localStorage.getItem('todos');
    const todosData = stored ? JSON.parse(stored) : {};

    todosData[today] = this.todos();
    this.history.set(todosData);
    localStorage.setItem('todos', JSON.stringify(todosData));
  }

  loadFromLS() {
    const today = this.getToday();
    const stored = localStorage.getItem('todos');

    if (stored) {
      const todosData = JSON.parse(stored);
      if (todosData[today]) {
        this.todos.set(todosData[today]);
        this.history.set(todosData);
        return;
      }
    }

    this.storeToLS();
  }

  add(todo: Todo) {
    if (this.todoUpdateId()) {
      const todos = this.todos();
      const index = this.findIndex(this.todoUpdateId());

      if (index !== -1) {
        todo.id = this.todoUpdateId();
        const updatedTodos = [...todos];
        updatedTodos[index] = todo;
        this.todos.set(updatedTodos);
      }

      this.todoUpdateId.set(0);
    } else {
      todo.id = this.todos().length + 1;
      this.todos.set([...this.todos(), todo]);
    }

    this.storeToLS();
  }

  get() {
    this.todo.set({
      id: 0,
      text: 'Your done for today',
      notepad: false,
      done: false,
      urls: [],
    });

    for (let i = 0; i < this.todos().length; i++) {
      if (!this.todos()[i].done) {
        this.todo.set(this.todos()[i]);
        break;
      }
    }
  }

  check(index: number) {
    this.todos()[index].done = !this.todos()[index].done;

    this.storeToLS();
  }

  delete(index: number) {
    this.todos().splice(index, 1);

    this.storeToLS();
  }

  notepad(index: number) {
    this.todos()[index].notepad = !this.todos()[index].notepad;

    this.storeToLS();
  }
}
