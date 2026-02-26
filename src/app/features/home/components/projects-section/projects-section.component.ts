import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Lock } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data.service';
import { Project } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './projects-section.component.html',
})
export class ProjectsSectionComponent implements OnInit {
  readonly ExternalLink = ExternalLink;
  readonly Lock = Lock;

  projects: Project[] = [];
  hoveredProject: number | null = null;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      if (data) {
        this.projects = data.projects;
      }
    });
  }

  openLink(url: string, status: string): void {
    if (status === 'published' && url !== '#') {
      window.open(url, '_blank');
    }
  }

  isProjectPublished(status: string): boolean {
    return status === 'published';
  }
}

