import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from './seo.service';

export type Language = 'en' | 'pt' | 'es' | 'fr';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly seoService = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly STORAGE_KEY = 'portfolio-language';

  public readonly languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'pt', name: 'Português', flag: 'PT' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'fr', name: 'Français', flag: 'FR' }
  ];

  constructor() {
    this.initLanguage();

    if (this.isBrowser) {
      this.translate.onLangChange.subscribe((event) => {
        this.seoService.updateMetaTags();
        this.seoService.updateLanguage(event.lang);
      });
    }
  }

  private initLanguage(): void {
    this.translate.addLangs(this.languages.map(lang => lang.code));

    this.translate.setDefaultLang('en');

    if (!this.isBrowser) {
      return;
    }

    const savedLanguage = this.getSavedLanguage();
    const browserLang = this.translate.getBrowserLang() as Language;
    const languageToUse = savedLanguage ||
      (this.languages.some(l => l.code === browserLang) ? browserLang : 'en');

    this.setLanguage(languageToUse);
  }

  public setLanguage(lang: Language): void {
    this.translate.use(lang);

    if (this.isBrowser) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  public getCurrentLanguage(): Language {
    return (this.translate.currentLang || 'en') as Language;
  }

  private getSavedLanguage(): Language | null {
    if (!this.isBrowser) {
      return null;
    }

    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved as Language | null;
  }

  public getLanguageOption(code: Language): LanguageOption | undefined {
    return this.languages.find(lang => lang.code === code);
  }
}
