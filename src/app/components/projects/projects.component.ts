import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Angular Dashboard Suite',
      description: 'A feature-rich admin dashboard built with Angular 17 showcasing standalone components, reactive forms, RxJS data streams, lazy-loaded modules, and Angular Material UI. Includes dynamic charts, data tables with virtual scrolling, and role-based route guards.',
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS'],
      github: 'https://github.com/manideep-reddy2701',
      live: '',
      badge: 'Featured',
      badgeColor: 'purple'
    },
    {
      title: 'Full Stack Task Manager',
      description: 'End-to-end task management application with Angular frontend and Spring Boot REST API backend. Features JWT authentication, reactive forms with validation, HttpInterceptor for auth headers, and a Node.js/MongoDB data layer.',
      tech: ['Angular', 'Spring Boot', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/manideep-reddy2701',
      live: '',
      badge: 'Full Stack',
      badgeColor: 'teal'
    },
    {
      title: 'RxJS State Management Demo',
      description: 'A focused demo application illustrating advanced RxJS patterns — BehaviorSubject-based state management, combineLatest for derived state, switchMap for API cancellation, and custom operators. Built as a reference for enterprise Angular patterns.',
      tech: ['Angular', 'RxJS', 'TypeScript', 'SCSS'],
      github: 'https://github.com/manideep-reddy2701',
      live: '',
      badge: 'Angular',
      badgeColor: 'purple'
    },
    {
      title: 'Spring Boot Microservices API',
      description: 'A backend microservices project with Spring Boot, Eureka service discovery, API Gateway, and Spring Cloud Config. Includes JWT security, Docker containerization, and a Kafka event-driven messaging layer between services.',
      tech: ['Spring Boot', 'Java', 'Kafka', 'Docker', 'JWT'],
      github: 'https://github.com/manideep-reddy2701',
      live: '',
      badge: 'Backend',
      badgeColor: 'teal'
    },
  ];
}