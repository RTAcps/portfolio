import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, BookOpen, Zap } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data.service';
import { Curiosity } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-curiosities-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './curiosities-section.component.html',
})
export class CuriositiesSectionComponent implements OnInit {
  readonly Sparkles = Sparkles;
  readonly BookOpen = BookOpen;
  readonly Zap = Zap;

  curiosities: Curiosity[] = [];
  iconMap: { [key: string]: any } = {
    'book-open': BookOpen,
    'zap': Zap,
    'sparkles': Sparkles,
  };

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      if (data) {
        this.curiosities = data.curiosities;
      }
    });
  }

  getIcon(iconName?: string): any {
    if (!iconName) return Sparkles;
    return this.iconMap[iconName] || Sparkles;
  }
}
