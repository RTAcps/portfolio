/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ExperienceSectionComponent } from './experience-section.component';
import { DataService } from '../../../../shared/services/data.service';

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent;
  let fixture: ComponentFixture<ExperienceSectionComponent>;
  let dataSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('en'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of({})),
      currentLang: 'en',
      onLangChange: of()
    } as unknown as TranslateService;

    dataSubject = new BehaviorSubject<any>(null);
    const dataServiceMock = {
      data$: dataSubject.asObservable()
    } as unknown as DataService;

    await TestBed.configureTestingModule({
      imports: [ExperienceSectionComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: DataService, useValue: dataServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set experiences on init when data arrives', () => {
    component.ngOnInit();

    dataSubject.next({
      experiences: [
        { id: 1, company: 'A', position: 'Dev', period: '2020', description: 'Desc', technologies: [] }
      ]
    });

    expect(component.experiences).toHaveLength(1);
    expect(component.experiences[0].company).toBe('A');
  });

  it('should keep experiences empty when data is null', () => {
    component.ngOnInit();
    dataSubject.next(null);

    expect(component.experiences).toHaveLength(0);
  });
});
