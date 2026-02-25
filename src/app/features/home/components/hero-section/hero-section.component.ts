import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowDown, MapPin, Briefcase } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { mockData } from '../../../../shared/data/mock';
import { HeroData } from '../../../../shared/models/projects';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  readonly ArrowDown = ArrowDown;
  readonly MapPin = MapPin;
  readonly Briefcase = Briefcase;

  hero: HeroData = mockData.hero;

  @ViewChild('heroAvatar') heroAvatar!: ElementRef;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.heroAvatar?.nativeElement) return;
    const xPos = (event.clientX / window.innerWidth - 0.5) * 20;
    const yPos = (event.clientY / window.innerHeight - 0.5) * 20;
    this.heroAvatar.nativeElement.style.transform = `translate(${xPos}px, ${yPos}px)`;
  }

  scrollToContact(): void {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
