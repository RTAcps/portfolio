/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HeroSectionComponent } from './hero-section.component';
import { DataService } from '../../../../shared/services/data.service';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;
  let dataSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('en'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of({
        hero: { name: 'Test', title: 'Test', subtitle: 'Test', description: 'Test', location: 'Test' },
        about: { bio: 'Test', highlights: [] },
        experiences: [{ company: 'Test', position: 'Test', period: 'Test', description: 'Test' }],
        projects: [{ title: 'Test', description: 'Test' }],
        contact: { email: 'test@test.com', social: [] }
      })),
      currentLang: 'en',
      onLangChange: of()
    } as unknown as TranslateService;

    dataSubject = new BehaviorSubject<any>(null);
    const dataServiceMock = {
      data$: dataSubject.asObservable()
    } as unknown as DataService;

    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: DataService, useValue: dataServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set hero data on init', () => {
    component.ngOnInit();
    dataSubject.next({
      hero: {
        name: 'Hero',
        title: 'Title',
        subtitle: 'Sub',
        description: 'Desc',
        location: 'Loc',
        availability: 'Avail'
      }
    });

    expect(component.hero.name).toBe('Hero');
  });

  it('should update avatar transform on mouse move', () => {
    const nativeElement = { style: { transform: '' } };
    component.heroAvatar = { nativeElement } as any;

    component.onMouseMove({ clientX: 10, clientY: 20 } as MouseEvent);

    expect(nativeElement.style.transform).toContain('translate(');
  });

  it('should scroll to contact section', () => {
    const target = document.createElement('div');
    target.id = 'contact';
    target.scrollIntoView = vi.fn();
    const scrollSpy = vi.spyOn(target, 'scrollIntoView');
    document.body.appendChild(target);

    component.scrollToContact();

    expect(scrollSpy).toHaveBeenCalled();
    document.body.removeChild(target);
  });
});
