import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { mockData } from '../../../../shared/data/mock';
import { Project } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './projects-section.component.html',
})
export class ProjectsSectionComponent {
  readonly ExternalLink = ExternalLink;

  projects: Project[] = mockData.projects;
  hoveredProject: number | null = null;

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
