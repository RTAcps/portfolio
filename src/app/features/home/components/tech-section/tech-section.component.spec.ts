/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TechSectionComponent } from './tech-section.component';

describe('TechSectionComponent', () => {
  let component: TechSectionComponent;
  let fixture: ComponentFixture<TechSectionComponent>;

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

    await TestBed.configureTestingModule({
      imports: [TechSectionComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TechSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return categories from technologies', () => {
    const categories = component.getCategories();
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should filter technologies by selected category', () => {
    const categories = component.getCategories();
    const category = categories[0];

    component.selectCategory(category);
    const filtered = component.getFilteredTechnologies();

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((tech) => tech.category === category)).toBe(true);
  });

  it('should toggle category selection', () => {
    const category = component.getCategories()[0];

    component.selectCategory(category);
    expect(component.selectedCategory).toBe(category);

    component.selectCategory(category);
    expect(component.selectedCategory).toBeNull();
  });

  it('should return icon for known and unknown names', () => {
    const knownIcon = component.getIcon('angular');
    const unknownIcon = component.getIcon('does-not-exist');

    expect(knownIcon).toBeDefined();
    expect(unknownIcon).toBeDefined();
  });
});
