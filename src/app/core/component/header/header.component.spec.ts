/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { HeaderComponent } from './header.component';
import { ThemeService } from '../../services/theme.service';
import { Language, LanguageService } from '../../services/language.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let themeServiceMock: ThemeService;
  let languageServiceMock: LanguageService;

  beforeEach(async () => {
    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('en'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of(key)),
      currentLang: 'en',
      onLangChange: of()
    } as unknown as TranslateService;

    themeServiceMock = {
      toggleTheme: vi.fn()
    } as unknown as ThemeService;

    languageServiceMock = {
      setLanguage: vi.fn(),
      getCurrentLanguage: vi.fn().mockReturnValue('en'),
      getLanguageOption: vi.fn().mockReturnValue({ code: 'en', name: 'English', flag: 'EN' })
    } as unknown as LanguageService;

    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: ThemeService, useValue: themeServiceMock },
        { provide: LanguageService, useValue: languageServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update scrolled state on scroll', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true });
    component.onScroll();

    expect(component.scrolled).toBe(true);
  });

  it('should toggle theme', () => {
    component.toggleTheme();
    expect(themeServiceMock.toggleTheme).toHaveBeenCalled();
  });

  it('should toggle language menu state', () => {
    const initial = component.languageMenuOpen;
    component.toggleLanguageMenu();

    expect(component.languageMenuOpen).toBe(!initial);
  });

  it('should change language and close menu', () => {
    component.languageMenuOpen = true;
    const lang = { code: 'pt', name: 'Portuguese', flag: 'PT' } as unknown as Language;

    component.changeLanguage(lang);

    expect(languageServiceMock.setLanguage).toHaveBeenCalledWith(lang);
    expect(component.languageMenuOpen).toBe(false);
  });

  it('should return current language option', () => {
    const current = component.currentLanguage;
    expect(current).toBeDefined();
    expect(current?.code).toBe('en');
  });

  it('should scroll to section and close mobile menu', () => {
    const target = document.createElement('div');
    target.id = 'contact';
    target.scrollIntoView = vi.fn();
    const scrollSpy = vi.spyOn(target, 'scrollIntoView');
    document.body.appendChild(target);

    const event = { preventDefault: vi.fn() } as unknown as Event;
    component.mobileMenuOpen = true;

    component.scrollToSection(event, '#contact');

    expect(event.preventDefault).toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalled();
    expect(component.mobileMenuOpen).toBe(false);

    document.body.removeChild(target);
  });
});
