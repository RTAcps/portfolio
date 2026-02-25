/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { HomeComponent } from './home.component';
import { DataService } from '../../shared/services/data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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

    const dataServiceMock = {
      data$: of({})
    } as unknown as DataService;

    await TestBed.configureTestingModule({
      imports: [HomeComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: DataService, useValue: dataServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data service available', () => {
    expect(component).toBeDefined();
  });
});
