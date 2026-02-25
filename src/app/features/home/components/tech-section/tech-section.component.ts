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
import { Technology } from '../../../../../shared/models/projects';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './tech-section.component.html',
})
export class TechSectionComponent {
  technologies: Technology[] = [...mockData.technologies].sort((a, b) => b.proficiency - a.proficiency);
  hoveredTech: number | null = null;
  selectedCategory: string | null = null;

  getCategories(): string[] {
    const categories = new Set(this.technologies.map(tech => tech.category));
    return Array.from(categories);
  }

  getFilteredTechnologies(): Technology[] {
    if (!this.selectedCategory) {
      return this.technologies;
    }
    return this.technologies.filter(tech => tech.category === this.selectedCategory);
  }

  selectCategory(category: string | null): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
  }

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
