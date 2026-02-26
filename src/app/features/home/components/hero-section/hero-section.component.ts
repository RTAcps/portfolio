import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowDown, MapPin, Briefcase } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data.service';
import { HeroData } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent implements OnInit {
  readonly ArrowDown = ArrowDown;
  readonly MapPin = MapPin;
  readonly Briefcase = Briefcase;
  acronym = '';
  photoUrl = '../../../../assets/images/profile.png';

  hero: HeroData = {
    name: '',
    title: '',
    subtitle: '',
    description: '',
    location: '',
    availability: '',
  };

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      if (data) {
        this.hero = data.hero;
        this.acronym = this.hero.name.split(' ').filter(word => /^[A-Z]/.test(word)).map(word => word.charAt(0)).join('');
      }
    });

  }

  @ViewChild('heroAvatar') heroAvatar!: ElementRef;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.heroAvatar?.nativeElement) return;
    const xPos = (event.clientX / window.innerWidth - 0.5) * 20;
    const yPos = (event.clientY / window.innerHeight - 0.5) * 20;
    this.heroAvatar.nativeElement.style.transform = `translate(${xPos}px, ${yPos}px)`;
  }

  scrollToContact(): void {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


