import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

/**
 * Service to manage SEO meta tags dynamically
 * Updates meta tags when language or content changes
 */
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private translate = inject(TranslateService);

  /**
   * Update all meta tags based on current language
   */
  updateMetaTags(): void {
    const name = this.translate.instant('data.hero.name');
    const jobTitle = this.translate.instant('data.hero.title');
    const description = this.translate.instant('data.hero.description');

    const fullTitle = `${name} | ${jobTitle}`;

    // Update title
    this.title.setTitle(fullTitle);

    // Update basic meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'author', content: name });

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
  }

  /**
   * Update canonical URL
   * @param url The canonical URL for the current page
   */
  updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    if (link) {
      link.href = url;
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }

  /**
   * Update language meta tags
   * @param lang Current language code (pt, en, es, fr)
   */
  updateLanguage(lang: string): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    this.meta.updateTag({ property: 'og:locale', content: this.getLocaleCode(lang) });
  }

  /**
   * Convert language code to locale code
   * @param lang Language code
   * @returns Locale code (e.g., pt_BR, en_US)
   */
  private getLocaleCode(lang: string): string {
    const localeMap: { [key: string]: string } = {
      'pt': 'pt_BR',
      'en': 'en_US',
      'es': 'es_ES',
      'fr': 'fr_FR'
    };
    return localeMap[lang] || 'en_US';
  }

  /**
   * Add JSON-LD structured data to the page
   * @param data Structured data object
   */
  addStructuredData(data: any): void {
    if (typeof document === 'undefined') {
      return;
    }

    let script = document.querySelector('script[type="application/ld+json"]');

    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}
