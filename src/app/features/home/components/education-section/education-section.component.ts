import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GraduationCap, Calendar } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data.service';
import { Education } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './education-section.component.html',
})
export class EducationSectionComponent implements OnInit {
  readonly GraduationCap = GraduationCap;
  readonly Calendar = Calendar;

  education: Education[] = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      if (data) {
        this.education = data.education;
      }
    });
  }
}
