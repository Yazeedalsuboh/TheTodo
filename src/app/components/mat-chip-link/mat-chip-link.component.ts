import { Component, Input, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-mat-chip-link',
  imports: [MatChipsModule],
  templateUrl: './mat-chip-link.component.html',
  styleUrl: './mat-chip-link.component.css',
})
export class MatChipLinkComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) link!: string;

  openLink(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
