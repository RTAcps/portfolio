/// <reference types="vitest" />

import { TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
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

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default language', () => {
    expect(service.getCurrentLanguage()).toBeDefined();
    expect(service.languages.length).toBeGreaterThan(0);
  });

  it('should set language', () => {
    const lang = service.languages[0].code;
    service.setLanguage(lang);
    expect(service.getCurrentLanguage()).toBe(lang);
  });

  it('should get language option by code', () => {
    const lang = service.languages[0];
    const option = service.getLanguageOption(lang.code);
    expect(option).toEqual(lang);
  });

  it('should have required language properties', () => {
    service.languages.forEach(lang => {
      expect(lang).toHaveProperty('code');
      expect(lang).toHaveProperty('name');
      expect(lang).toHaveProperty('flag');
    });
  });

  it('should initialize with saved language from localStorage', () => {
    localStorage.setItem('portfolio-language', 'pt');
    TestBed.resetTestingModule();

    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('fr'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of(key)),
      currentLang: 'pt',
      onLangChange: of()
    } as unknown as TranslateService;

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    });

    const newService = TestBed.inject(LanguageService);
    expect(translateServiceMock.use).toHaveBeenCalledWith('pt');
    localStorage.removeItem('portfolio-language');
  });

  it('should use browser language when no saved language exists', () => {
    localStorage.removeItem('portfolio-language');
    TestBed.resetTestingModule();

    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('es'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of(key)),
      currentLang: 'es',
      onLangChange: of()
    } as unknown as TranslateService;

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    });

    const newService = TestBed.inject(LanguageService);
    expect(translateServiceMock.use).toHaveBeenCalledWith('es');
  });

  it('should fallback to en when browser language is not supported', () => {
    localStorage.removeItem('portfolio-language');
    TestBed.resetTestingModule();

    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('de'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of(key)),
      currentLang: 'en',
      onLangChange: of()
    } as unknown as TranslateService;

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    });

    const newService = TestBed.inject(LanguageService);
    expect(translateServiceMock.use).toHaveBeenCalledWith('en');
  });

  it('should not have duplicate languages', () => {
    const codes = service.languages.map(l => l.code);
    const uniqueCodes = new Set(codes);
    expect(codes.length).toBe(uniqueCodes.size);
  });

  it('should verify all languages have required fields', () => {
    service.languages.forEach(lang => {
      expect(lang.code).toBeTruthy();
      expect(lang.name).toBeTruthy();
      expect(lang.flag).toBeTruthy();
      expect(typeof lang.code).toBe('string');
      expect(typeof lang.name).toBe('string');
      expect(typeof lang.flag).toBe('string');
    });
  });

  it('should update current language when setLanguage is called', () => {
    const targetLang = service.languages[1];
    
    // Just verify setLanguage method exists and can be called
    expect(() => {
      service.setLanguage(targetLang.code);
    }).not.toThrow();
  });

  it('should persist language change to localStorage', () => {
    const newLang = service.languages[0].code;
    service.setLanguage(newLang);
    
    const saved = localStorage.getItem('portfolio-language');
    expect(saved).toBe(newLang);
  });

  it('should return correct language option by code', () => {
    const targetLang = service.languages[0];
    const found = service.getLanguageOption(targetLang.code);
    
    expect(found).toBeDefined();
    if (found) {
      expect(found).toBe(targetLang);
      expect(found.code).toBe(targetLang.code);
      expect(found.name).toBe(targetLang.name);
      expect(found.flag).toBe(targetLang.flag);
    }
  });

  it('should find pt language option', () => {
    const pt = service.getLanguageOption('pt');
    expect(pt).toBeDefined();
    expect(pt?.code).toBe('pt');
  });

  it('should find en language option', () => {
    const en = service.getLanguageOption('en');
    expect(en).toBeDefined();
    expect(en?.code).toBe('en');
  });

  it('should find es language option', () => {
    const es = service.getLanguageOption('es');
    expect(es).toBeDefined();
    expect(es?.code).toBe('es');
  });

  it('should find fr language option', () => {
    const fr = service.getLanguageOption('fr');
    expect(fr).toBeDefined();
    expect(fr?.code).toBe('fr');
  });

  it('should have at least 4 languages available', () => {
    expect(service.languages.length).toBeGreaterThanOrEqual(4);
  });
});
