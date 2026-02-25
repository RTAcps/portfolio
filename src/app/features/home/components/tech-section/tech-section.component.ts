import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Code,
  Workflow,
  Database,
  FileCode,
  Palette,
  Wind,
  GitBranch,
  CheckCircle,
  PlayCircle,
  Figma,
} from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { mockData } from '../../../../shared/data/mock';
import { Technology } from '../../../../shared/models/projects';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './tech-section.component.html',
})
export class TechSectionComponent {
  technologies: Technology[] = mockData.technologies;
  hoveredTech: number | null = null;

  private readonly iconMap: Record<string, LucideIconData> = {
    angular: Code,
    code: Code,
    workflow: Workflow,
    database: Database,
    'file-code': FileCode,
    palette: Palette,
    wind: Wind,
    'git-branch': GitBranch,
    'check-circle': CheckCircle,
    'play-circle': PlayCircle,
    figma: Figma,
  };

  getIcon(iconName: string): LucideIconData {
    return this.iconMap[iconName] || Code;
  }
}
