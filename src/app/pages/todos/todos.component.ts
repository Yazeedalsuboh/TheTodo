import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.services';
import { MatCardModule } from '@angular/material/card';
import { MatChipLinkComponent } from '../../components/mat-chip-link/mat-chip-link.component';
import { MatDividerModule } from '@angular/material/divider';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';

@Component({
  selector: 'app-todos',
  imports: [
    MatCardModule,
    MatChipLinkComponent,
    MatDividerModule,
    EditMenuComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  readonly todoService = inject(TodoService);
}
