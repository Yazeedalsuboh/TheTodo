import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.services';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipLinkComponent } from '../../components/mat-chip-link/mat-chip-link.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BarComponent } from './components/bar/bar.component';

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
    BarComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.get();
  }
}
