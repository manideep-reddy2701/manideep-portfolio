import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  displayText = signal('');
  private roles = [
    'Angular UI Specialist',
    'Full Stack Developer',
    'RxJS & TypeScript Expert',
    'Spring Boot Developer'
  ];
  private currentRole = 0;
  private currentChar = 0;
  private isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  private typeEffect() {
    const role = this.roles[this.currentRole];
    if (this.isDeleting) {
      this.displayText.set(role.substring(0, this.currentChar - 1));
      this.currentChar--;
    } else {
      this.displayText.set(role.substring(0, this.currentChar + 1));
      this.currentChar++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.currentChar === role.length) {
      speed = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentChar === 0) {
      this.isDeleting = false;
      this.currentRole = (this.currentRole + 1) % this.roles.length;
      speed = 400;
    }

    setTimeout(() => this.typeEffect(), speed);
  }

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}