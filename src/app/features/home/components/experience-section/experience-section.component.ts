import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data.service';
import { Experience } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent implements OnInit {
  readonly Briefcase = Briefcase;
  readonly Calendar = Calendar;

  experiences: Experience[] = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      if (data) {
        this.experiences = data.experiences;
      }
    });
  }
}

