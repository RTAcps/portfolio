/// <reference types="vitest" />

import { TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let translateServiceMock: any;
  let onLangChangeSubject: BehaviorSubject<any>;

  beforeEach(() => {
    onLangChangeSubject = new BehaviorSubject({ lang: 'en' });

    const mockDataResponse = {
      hero: { name: 'Test', title: 'Test', subtitle: 'Test', description: 'Test', location: 'Test' },
      about: { bio: 'Test', highlights: ['highlight1', 'highlight2'] },
      experiences: [
        { company: 'Company 1', position: 'Position 1', period: '2020-2021', description: 'Desc 1' },
        { company: 'Company 2', position: 'Position 2', period: '2021-2022', description: 'Desc 2' }
      ],
      projects: [
        { title: 'Project 1', description: 'Desc 1' },
        { title: 'Project 2', description: 'Desc 2' }
      ],
      education: [
        { institution: 'University 1', degree: 'Bachelor', field: 'CS', year: '2020' },
        { institution: 'University 2', degree: 'Master', field: 'CS', year: '2022' }
      ],
      curiosities: [
        { title: 'Curiosity 1', description: 'Desc 1', icon: 'sparkles' },
        { title: 'Curiosity 2', description: 'Desc 2', icon: 'zap' }
      ],
      contact: { email: 'test@test.com', social: [] }
    };

    translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('en'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of(mockDataResponse)),
      currentLang: 'en',
      onLangChange: onLangChangeSubject.asObservable()
    };

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    });

    // Create DataService directly with mocked TranslateService
    service = new DataService(translateServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have data$ observable', async () => {
    const data = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      service.data$.subscribe({
        next: (value) => {
          if (value) {
            clearTimeout(timeout);
            resolve(value);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });
    expect(data).toBeDefined();
  }, 2000);

  it('should reload data on language change', async () => {
    let callCount = 0;
    service.data$.subscribe(data => {
      if (data) callCount++;
    });

    await new Promise(resolve => setTimeout(resolve, 50));

    // Trigger language change
    onLangChangeSubject.next({ lang: 'pt' });

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(callCount).toBeGreaterThan(0);
  });

  it('should return data$ via getData method', async () => {
    const observable = service.getData();
    expect(observable).toBeDefined();

    const data = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      observable.subscribe({
        next: (value) => {
          if (value) {
            clearTimeout(timeout);
            resolve(value);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    expect(data).toBeDefined();
  }, 2000);

  it('should map translated data correctly', async () => {
    const data = await new Promise<any>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      service.data$.subscribe({
        next: (value) => {
          if (value) {
            clearTimeout(timeout);
            resolve(value);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    expect(data.hero).toBeDefined();
    expect(data.hero.name).toBe('Test');
    expect(data.hero.title).toBe('Test');
    expect(data.hero.availability).toBeDefined();

    expect(data.about).toBeDefined();
    expect(data.about.bio).toBe('Test');
    expect(data.about.highlights).toHaveLength(2);

    expect(data.experiences).toHaveLength(2);
    expect(data.experiences[0].company).toBe('Company 1');
    expect(data.experiences[0].id).toBe(1);
    expect(data.experiences[0].technologies).toBeDefined();
    expect(data.experiences[1].id).toBe(2);

    expect(data.projects).toHaveLength(2);
    expect(data.projects[0].title).toBe('Project 1');
    expect(data.projects[0].id).toBe(1);
    expect(data.projects[1].id).toBe(2);

    expect(data.contact).toBeDefined();
    expect(data.technologies).toBeDefined();
  }, 2000);

  it('should call translate.get on data load', async () => {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      service.data$.subscribe({
        next: (data) => {
          if (data) {
            clearTimeout(timeout);
            resolve(data);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    expect(translateServiceMock.get).toHaveBeenCalledWith('data');
  }, 2000);

  it('should handle multiple language changes', async () => {
    let emissionCount = 0;
    const subscription = service.data$.subscribe(data => {
      if (data) emissionCount++;
    });

    expect(emissionCount).toBeGreaterThan(0);

    onLangChangeSubject.next({ lang: 'pt' });
    await new Promise(resolve => setTimeout(resolve, 50));

    const countAfterFirstChange = emissionCount;

    onLangChangeSubject.next({ lang: 'es' });
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(emissionCount).toBeGreaterThan(countAfterFirstChange);
    subscription.unsubscribe();
  });

  it('should provide data through getData method that matches data$', async () => {
    let dataFromPublic: any;
    let dataFromMethod: any;

    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      service.data$.subscribe({
        next: (data) => {
          if (data) {
            clearTimeout(timeout);
            dataFromPublic = data;
            resolve(data);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    const observable = service.getData();
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      observable.subscribe({
        next: (data) => {
          if (data) {
            clearTimeout(timeout);
            dataFromMethod = data;
            resolve(data);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    expect(dataFromMethod).toEqual(dataFromPublic);
  }, 2000);

  it('should properly structure experiences with technologies', async () => {
    const data = await new Promise<any>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      service.data$.subscribe({
        next: (value) => {
          if (value) {
            clearTimeout(timeout);
            resolve(value);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    data.experiences.forEach((exp: any) => {
      expect(exp).toHaveProperty('id');
      expect(exp).toHaveProperty('company');
      expect(exp).toHaveProperty('position');
      expect(exp).toHaveProperty('period');
      expect(exp).toHaveProperty('description');
      expect(exp).toHaveProperty('technologies');
      expect(Array.isArray(exp.technologies)).toBe(true);
    });
  }, 2000);

  it('should properly structure projects with ids', async () => {
    const data = await new Promise<any>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 1000);
      service.data$.subscribe({
        next: (value) => {
          if (value) {
            clearTimeout(timeout);
            resolve(value);
          }
        },
        error: (err) => {
          clearTimeout(timeout);
          reject(err);
        }
      });
    });

    data.projects.forEach((proj: any, index: number) => {
      expect(proj).toHaveProperty('id');
      expect(proj).toHaveProperty('title');
      expect(proj).toHaveProperty('description');
      expect(proj.id).toBe(index + 1);
    });
  }, 2000);
});
