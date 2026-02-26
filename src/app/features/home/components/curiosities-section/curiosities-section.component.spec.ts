import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { CuriositiesSectionComponent } from './curiosities-section.component';

describe('CuriositiesSectionComponent', () => {
  let component: CuriositiesSectionComponent;
  let fixture: ComponentFixture<CuriositiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuriositiesSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuriositiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize curiosities array as empty', () => {
    expect(component.curiosities).toEqual([]);
  });

  it('should return Sparkles icon for unknown icon name', () => {
    const icon = component.getIcon('unknown');
    expect(icon).toBe(component.Sparkles);
  });

  it('should return BookOpen icon for book-open', () => {
    const icon = component.getIcon('book-open');
    expect(icon).toBe(component.BookOpen);
  });

  it('should return Zap icon for zap', () => {
    const icon = component.getIcon('zap');
    expect(icon).toBe(component.Zap);
  });
});
