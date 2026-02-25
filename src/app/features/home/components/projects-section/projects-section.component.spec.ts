/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ProjectsSectionComponent } from './projects-section.component';
import { DataService } from '../../../../shared/services/data.service';

describe('ProjectsSectionComponent', () => {
  let component: ProjectsSectionComponent;
  let fixture: ComponentFixture<ProjectsSectionComponent>;
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
      imports: [ProjectsSectionComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: DataService, useValue: dataServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set projects on init when data arrives', () => {
    component.ngOnInit();

    dataSubject.next({
      projects: [
        { id: 1, title: 'P1', description: 'D1' },
        { id: 2, title: 'P2', description: 'D2' }
      ]
    });

    expect(component.projects).toHaveLength(2);
    expect(component.projects[0].title).toBe('P1');
  });

  it('should open link in new tab', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    component.openLink('https://example.com');

    expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank');
    openSpy.mockRestore();
  });
});
