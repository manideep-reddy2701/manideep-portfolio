import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Delivered' },
    { value: '2', label: 'Domains (Banking & Telecom)' },
    { value: '3', label: 'Countries Worked' },
  ];
}