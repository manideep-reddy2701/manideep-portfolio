import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend (Primary)',
      icon: '⚡',
      skills: [
        { name: 'Angular 2–17', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'RxJS', level: 90 },
        { name: 'Angular Material', level: 88 },
        { name: 'HTML5 / SCSS', level: 92 },
        { name: 'Reactive Forms', level: 90 },
      ]
    },
    {
      category: 'Frontend (Secondary)',
      icon: '🎨',
      skills: [
        { name: 'React 16–18', level: 75 },
        { name: 'Redux Toolkit', level: 72 },
        { name: 'Material UI', level: 74 },
        { name: 'React Hooks', level: 73 },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java / Spring Boot', level: 82 },
        { name: 'Node.js / Express', level: 78 },
        { name: 'REST APIs', level: 88 },
        { name: 'Microservices', level: 80 },
        { name: 'Spring Security', level: 78 },
        { name: 'Apache Kafka', level: 74 },
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'AWS (EC2/S3/EKS)', level: 76 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 74 },
        { name: 'Jenkins CI/CD', level: 78 },
        { name: 'Git / GitHub', level: 90 },
      ]
    },
  ];
}