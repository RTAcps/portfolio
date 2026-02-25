import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, Phone, Send, Github, Linkedin, Twitter, Link } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { mockData } from '../../../../shared/data/mock';
import { ContactData } from '../../../../../shared/models/projects';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, TranslateModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Send = Send;

  contact: ContactData = mockData.contact;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  toastVisible = false;
  toastTitleKey = '';
  toastDescriptionKey = '';

  private readonly iconMap: Record<string, LucideIconData> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  getIcon(iconName: string): LucideIconData {
    return this.iconMap[iconName] || Link;
  }

  handleSubmit(): void {
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

    this.toastTitleKey = 'contact.toast.successTitle';
    this.toastDescriptionKey = 'contact.toast.successDescription';
    this.toastVisible = true;

    this.formData = { name: '', email: '', message: '' };

    setTimeout(() => {
      this.toastVisible = false;
    }, 4000);
  }
}
