import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sun, Moon, Menu, X, ChevronDown } from 'lucide-angular';
import { ThemeService } from '../../services/theme.service';
import { LanguageService, Language } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './header.component.html',
  styles: [
    `
      :host
          display: block
    `
  ],
})
export class HeaderComponent {
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Menu = Menu;
  readonly X = X;
  readonly ChevronDown = ChevronDown;

  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
  scrolled = false;
  mobileMenuOpen = false;
  languageMenuOpen = false;

  navLinks = [
    { href: '#experiences', label: 'nav.experience' },
    { href: '#technologies', label: 'nav.tech' },
    { href: '#projects', label: 'nav.projects' },
    { href: '#contact', label: 'nav.contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  scrollToSection(event: Event, href: string): void {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.mobileMenuOpen = false;
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguageMenu(): void {
    this.languageMenuOpen = !this.languageMenuOpen;
  }

  changeLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
    this.languageMenuOpen = false;
  }

  get currentLanguage() {
    return this.languageService.getLanguageOption(this.languageService.getCurrentLanguage());
  }
}
