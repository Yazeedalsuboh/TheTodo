import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatChipsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly router = inject(Router);
}
