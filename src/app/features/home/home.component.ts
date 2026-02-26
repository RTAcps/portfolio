import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/component/header/header.component';
import { FooterComponent } from '../../core/component/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { TechSectionComponent } from './components/tech-section/tech-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { CuriositiesSectionComponent } from './components/curiosities-section/curiosities-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ExperienceSectionComponent,
    TechSectionComponent,
    ProjectsSectionComponent,
    EducationSectionComponent,
    CuriositiesSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styles: [
    `
      :host
        display: block
    `
  ],
})
export class HomeComponent {}

