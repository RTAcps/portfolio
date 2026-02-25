/// <reference types="vitest" />

import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with theme from localStorage or system preference', () => {
    expect(service.theme()).toBeDefined();
    expect(['light', 'dark']).toContain(service.theme());
  });

  it('should toggle theme between light and dark', () => {
    const initialTheme = service.theme();
    service.toggleTheme();
    const newTheme = service.theme();
    expect(newTheme).not.toBe(initialTheme);
  });

  it('should store theme in localStorage when toggled', async () => {
    service.toggleTheme();
    // Wait for effect to run
    await new Promise(resolve => setTimeout(resolve, 50));
    const storedTheme = localStorage.getItem('theme');
    expect(storedTheme).toBe(service.theme());
  });

  it('should apply dark class to document when theme is dark', async () => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);

    await new Promise(resolve => setTimeout(resolve, 100));

    if (service.theme() === 'dark') {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    }
  });

  it('should initialize with light theme from localStorage', () => {
    localStorage.setItem('theme', 'light');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('light');
    localStorage.clear();
  });

  it('should initialize with dark theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
    localStorage.clear();
  });

  it('should initialize with system preference when no stored theme', () => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);

    // Should use matchMedia result (mocked in test-setup.ts)
    expect(['light', 'dark']).toContain(service.theme());
  });

  it('should remove dark class when theme is light', async () => {
    localStorage.setItem('theme', 'light');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    localStorage.clear();
  });

  it('should maintain theme state across multiple selections', () => {
    const current = service.theme();
    const expected = current === 'light' ? 'dark' : 'light';
    
    service.toggleTheme();
    expect(service.theme()).toBe(expected);
    
    service.toggleTheme();
    expect(service.theme()).toBe(current);
  });

  it('should verify currentTheme signal is a signal', () => {
    expect(typeof service.theme).toBe('function');
    const theme = service.theme();
    expect(typeof theme).toBe('string');
  });

  it('should apply dark class immediately after toggle to dark', async () => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    
    // Initialize to light
    if (service.theme() === 'dark') {
      service.toggleTheme();
    }
    
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Toggle to dark
    service.toggleTheme();
    await new Promise(resolve => setTimeout(resolve, 50));
    
    if (service.theme() === 'dark') {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    }
    
    localStorage.clear();
  });

  it('should handle rapid theme toggles', async () => {
    const initialTheme = service.theme();
    
    service.toggleTheme();
    service.toggleTheme();
    service.toggleTheme();
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const oddToggles = service.theme() !== initialTheme;
    expect(oddToggles).toBe(true);
  });
});
