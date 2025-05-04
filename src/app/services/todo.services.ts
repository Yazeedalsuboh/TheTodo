import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.models';

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

  todoUpdateId = signal<number>(0);

  findIndex(id: number) {
    return this.todos().findIndex((todo) => todo.id === id);
  }

  add(todo: Todo) {
    if (this.todoUpdateId()) {
      const todos = this.todos();
      const index = todos.findIndex((todo) => todo.id === this.todoUpdateId());

      // const todoIndex = this.findIndex(id);

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

    localStorage.setItem('thetodos', JSON.stringify(this.todos()));
  }

  load() {
    const todos = localStorage.getItem('thetodos');

    if (todos) {
      this.todos.set(JSON.parse(todos));
    }
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

    localStorage.setItem('thetodos', JSON.stringify(this.todos()));
  }

  delete(index: number) {
    this.todos().splice(index, 1);

    localStorage.setItem('thetodos', JSON.stringify(this.todos()));
  }

  notepad(index: number) {
    this.todos()[index].notepad = !this.todos()[index].notepad;

    localStorage.setItem('thetodos', JSON.stringify(this.todos()));
  }

  private timeToMinutes(timeStr: string): number {
    const [hh, mm] = timeStr.split(':').map(Number);
    return hh * 60 + mm;
  }
}
