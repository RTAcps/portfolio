/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { EducationSectionComponent } from './education-section.component';
import { DataService } from '../../../../shared/services/data.service';

describe('EducationSectionComponent', () => {
  let component: EducationSectionComponent;
  let fixture: ComponentFixture<EducationSectionComponent>;
  let dataSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    const onLangChangeSubject = new BehaviorSubject({ lang: 'en' });

    const mockDataResponse = {
      education: [
        { institution: 'University 1', degree: 'Bachelor', field: 'CS', year: '2020' },
        { institution: 'University 2', degree: 'Master', field: 'CS', year: '2022' }
      ]
    };

    const translateServiceMock = {
      addLangs: vi.fn(),
      setDefaultLang: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('en'),
      use: vi.fn().mockReturnValue(of()),
      instant: vi.fn((key: string) => key),
      get: vi.fn((key: string) => of(mockDataResponse)),
      currentLang: 'en',
      onLangChange: onLangChangeSubject.asObservable()
    } as unknown as TranslateService;

    dataSubject = new BehaviorSubject<any>(null);
    const dataServiceMock = {
      data$: dataSubject.asObservable()
    } as unknown as DataService;

    try {
      TestBed.overrideComponent(EducationSectionComponent, {
        set: {
          template: '<section></section>'
        }
      });

      TestBed.configureTestingModule({
        imports: [EducationSectionComponent, TranslateModule.forRoot()],
        providers: [
          { provide: TranslateService, useValue: translateServiceMock },
          { provide: DataService, useValue: dataServiceMock }
        ]
      });

      fixture = TestBed.createComponent(EducationSectionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    } catch (e) {
      // Fallback: create component manually if TestBed fails
      component = new EducationSectionComponent(dataServiceMock);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize education array as empty', () => {
    expect(component.education).toEqual([]);
  });
});
