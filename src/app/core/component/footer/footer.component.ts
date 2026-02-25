import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styles: [
    `
      :host
        display: block
    `
  ],
})
export class FooterComponent {
  readonly Heart = Heart;
  currentYear = new Date().getFullYear();
}



