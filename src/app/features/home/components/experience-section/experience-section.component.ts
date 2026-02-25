import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { mockData } from '../../../../shared/data/mock';
import { Experience } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent {
  readonly Briefcase = Briefcase;
  readonly Calendar = Calendar;

  experiences: Experience[] = mockData.experiences;
}
