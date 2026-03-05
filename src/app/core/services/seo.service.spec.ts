/// <reference types="vitest" />

import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let metaService: Meta;
  let titleService: Title;
  let translateService: TranslateService;

  beforeEach(() => {
    const metaSpy = {
      updateTag: vi.fn()
    };
    const titleSpy = {
      setTitle: vi.fn()
    };
    const translateSpy = {
      instant: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        SeoService,
        { provide: Meta, useValue: metaSpy },
        { provide: Title, useValue: titleSpy },
        { provide: TranslateService, useValue: translateSpy }
      ]
    });

    service = TestBed.inject(SeoService);
    metaService = TestBed.inject(Meta);
    titleService = TestBed.inject(Title);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateMetaTags', () => {
    it('should update title and meta tags', () => {
      vi.mocked(translateService.instant)
        .mockReturnValueOnce('John Doe')
        .mockReturnValueOnce('Software Developer')
        .mockReturnValueOnce('Experienced developer specializing in Angular');

      service.updateMetaTags();

      expect(titleService.setTitle).toHaveBeenCalledWith('John Doe | Software Developer');
      expect(metaService.updateTag).toHaveBeenCalledWith({
        name: 'description',
        content: 'Experienced developer specializing in Angular'
      });
    });

    it('should update Open Graph tags', () => {
      vi.mocked(translateService.instant)
        .mockReturnValueOnce('John Doe')
        .mockReturnValueOnce('Software Developer')
        .mockReturnValueOnce('Experienced developer');

      service.updateMetaTags();

      expect(metaService.updateTag).toHaveBeenCalledWith({
        property: 'og:title',
        content: 'John Doe | Software Developer'
      });
      expect(metaService.updateTag).toHaveBeenCalledWith({
        property: 'og:description',
        content: 'Experienced developer'
      });
    });
  });

  describe('updateLanguage', () => {
    it('should update html lang attribute', () => {
      service.updateLanguage('pt');
      expect(document.documentElement.lang).toBe('pt');
    });

    it('should update og:locale meta tag', () => {
      service.updateLanguage('pt');
      expect(metaService.updateTag).toHaveBeenCalledWith({
        property: 'og:locale',
        content: 'pt_BR'
      });
    });

    it('should map language codes correctly', () => {
      const testCases = [
        { lang: 'pt', expected: 'pt_BR' },
        { lang: 'en', expected: 'en_US' },
        { lang: 'es', expected: 'es_ES' },
        { lang: 'fr', expected: 'fr_FR' }
      ];

      testCases.forEach(({ lang, expected }) => {
        service.updateLanguage(lang);
        expect(metaService.updateTag).toHaveBeenCalledWith({
          property: 'og:locale',
          content: expected
        });
      });
    });
  });
});
