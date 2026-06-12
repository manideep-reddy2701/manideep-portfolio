import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  submitted = signal(false);

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'manideepreddy0192@gmail.com',
      href: 'mailto:manideepreddy0192@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manideep-reddy',
      href: 'https://www.linkedin.com/in/manideep-reddy-0a493840/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/manideep-reddy2701',
      href: 'https://github.com/manideep-reddy2701'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Charlotte, NC (Open to Remote)',
      href: ''
    },
  ];

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted.set(true);
      this.formData = { name: '', email: '', message: '' };
    }
  }
}