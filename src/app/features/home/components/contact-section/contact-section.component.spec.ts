/// <reference types="vitest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ContactSectionComponent } from './contact-section.component';
import { DataService } from '../../../../shared/services/data.service';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let fixture: ComponentFixture<ContactSectionComponent>;
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
      imports: [ContactSectionComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: DataService, useValue: dataServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set contact data on init', () => {
    component.ngOnInit();
    dataSubject.next({
      contact: { email: 'a@b.com', phone: '123', social: [] }
    });

    expect(component.contact.email).toBe('a@b.com');
  });

  it('should return icon for known and unknown names', () => {
    const knownIcon = component.getIcon('github');
    const unknownIcon = component.getIcon('unknown');

    expect(knownIcon).toBeDefined();
    expect(unknownIcon).toBeDefined();
  });

  it('should show error toast when form is incomplete', () => {
    vi.useFakeTimers();
    component.formData = { name: '', email: '', message: '' };

    component.handleSubmit();

    expect(component.toastVisible).toBe(true);
    expect(component.toastTitleKey).toBe('contact.toast.errorTitle');

    vi.runAllTimers();
    expect(component.toastVisible).toBe(false);
    vi.useRealTimers();
  });

  it('should show success toast and reset form on submit', () => {
    vi.useFakeTimers();
    component.formData = { name: 'A', email: 'a@b.com', message: 'Hi' };

    component.handleSubmit();

    expect(component.toastVisible).toBe(true);
    expect(component.toastTitleKey).toBe('contact.toast.successTitle');
    expect(component.formData).toEqual({ name: '', email: '', message: '' });

    vi.runAllTimers();
    expect(component.toastVisible).toBe(false);
    vi.useRealTimers();
  });
});
