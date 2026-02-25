import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  private readonly STORAGE_KEY = 'portfolio-language';

  public readonly languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'pt', name: 'Português', flag: 'PT' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'fr', name: 'Français', flag: 'FR' }
  ];

  constructor(private readonly translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage(): void {
    this.translate.addLangs(this.languages.map(lang => lang.code));

    this.translate.setDefaultLang('en');

    const savedLanguage = this.getSavedLanguage();
    const browserLang = this.translate.getBrowserLang() as Language;
    const languageToUse = savedLanguage ||
      (this.languages.some(l => l.code === browserLang) ? browserLang : 'en');

    this.setLanguage(languageToUse);
  }

  public setLanguage(lang: Language): void {
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  public getCurrentLanguage(): Language {
    return (this.translate.currentLang || 'en') as Language;
  }

  private getSavedLanguage(): Language | null {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved as Language | null;
  }

  public getLanguageOption(code: Language): LanguageOption | undefined {
    return this.languages.find(lang => lang.code === code);
  }
}
