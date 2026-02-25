import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', currentTheme);
    });
  }

  private getInitialTheme(): 'light' | 'dark' {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
