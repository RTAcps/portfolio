import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, Phone, Send, Github, Linkedin, Instagram, Link, LucideIconData } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data.service';
import { ContactData } from '../../../../../shared/models/projects';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, TranslateModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent implements OnInit {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Send = Send;

  contact: ContactData = {
    email: '',
    phone: '',
    social: [],
  };

  formData = {
    name: '',
    email: '',
    message: '',
  };

  toastVisible = false;
  toastTitleKey = '';
  toastDescriptionKey = '';
  isSubmitting = false;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      if (data) {
        this.contact = data.contact;
      }
    });
  }

  private readonly iconMap: Record<string, LucideIconData> = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  getIcon(iconName: string): LucideIconData {
    return this.iconMap[iconName] || Link;
  }

  async handleSubmit(): Promise<void> {
    const { name, email, message } = this.formData;

    if (!name || !email || !message) {
      this.toastTitleKey = 'contact.toast.errorTitle';
      this.toastDescriptionKey = 'contact.toast.errorDescription';
      this.toastVisible = true;
      setTimeout(() => {
        this.toastVisible = false;
      }, 4000);
      return;
    }

    this.isSubmitting = true;

    try {
      const response = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact message');
      }

      this.toastTitleKey = 'contact.toast.successTitle';
      this.toastDescriptionKey = 'contact.toast.successDescription';
      this.toastVisible = true;
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.toastTitleKey = 'contact.toast.errorTitle';
      this.toastDescriptionKey = 'contact.toast.errorSending';
      this.toastVisible = true;
    } finally {
      this.isSubmitting = false;
      setTimeout(() => {
        this.toastVisible = false;
      }, 4000);
    }
  }
}

