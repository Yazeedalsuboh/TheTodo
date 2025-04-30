import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { TodosComponent } from './pages/todos/todos.component';
import { SetupComponent } from './pages/setup/setup.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'setup',
    pathMatch: 'full',
    component: SetupComponent,
  },
  {
    path: 'todos',
    pathMatch: 'full',
    component: TodosComponent,
  },
];
