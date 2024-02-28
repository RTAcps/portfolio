import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
''

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  public isMobileView!: boolean;

  constructor() {
    this.isMobileView = window.innerWidth <= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.isMobileView = window.innerWidth <= 768;
  }
}
