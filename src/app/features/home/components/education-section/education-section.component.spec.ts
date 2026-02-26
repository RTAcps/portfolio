import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { EducationSectionComponent } from './education-section.component';

describe('EducationSectionComponent', () => {
  let component: EducationSectionComponent;
  let fixture: ComponentFixture<EducationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize education array as empty', () => {
    expect(component.education).toEqual([]);
  });
});
