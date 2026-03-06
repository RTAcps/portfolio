/// <reference types="vitest" />

import { BehaviorSubject } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ContactSectionComponent } from './contact-section.component';
import { DataService } from '../../../../shared/services/data.service';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let dataSubject: BehaviorSubject<any>;

  beforeEach(() => {
    // Mock fetch globally
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    }) as any;

    dataSubject = new BehaviorSubject<any>(null);
    const dataServiceMock = {
      data$: dataSubject.asObservable()
    } as unknown as DataService;

    // Class-only tests: no template rendering needed.
    component = new ContactSectionComponent(dataServiceMock);
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

  it('should show success toast and reset form on submit', async () => {
    vi.useFakeTimers();
    component.formData = { name: 'A', email: 'a@b.com', message: 'Hi' };

    // Execute the async function
    const submitPromise = component.handleSubmit();

    // Advance timers to let fetch complete
    await vi.runAllTimersAsync();

    // Wait for the promise to resolve
    await submitPromise;

    expect(component.toastTitleKey).toBe('contact.toast.successTitle');
    expect(component.formData).toEqual({ name: '', email: '', message: '' });

    vi.useRealTimers();
  });
});
