import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  activeIndex = signal(0);

  experiences = [
    {
      company: 'Bank of America',
      role: 'Application Programmer',
      period: 'Jun 2024 – Present',
      location: 'Charlotte, NC',
      type: 'Full-time',
      highlights: [
        'Led Angular 17 migration of legacy JSP-based Risk Rating Scorecard to modern component-based SPA',
        'Architected reusable Angular 17 component library with reactive forms, ControlValueAccessor, and multi-level validation',
        'Built ops monitoring dashboard using RxJS BehaviorSubjects, combineLatest, and async pipe throughout',
        'Engineered HTTP interceptors for JWT auth, global loading states, and retry logic with exponential backoff',
        'Applied OnPush change detection, trackBy, pure pipes, and virtual scrolling for high-volume data grids',
        'Implemented lazy-loaded feature modules with route guards (CanActivate/CanDeactivate) and resolvers',
        'Developed dynamic form builder patterns for Basel-compliant regulatory scoring requirements',
        'Built Spring Boot microservices with API Gateway, Eureka discovery, and Spring Cloud Config',
        'Contributed to AWS migration POC evaluating ECS, EKS, Lambda as target infrastructure',
      ],
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'Spring Boot', 'Java 17', 'SQL Server', 'AWS', 'Docker']
    },
    {
      company: 'Comcast',
      role: 'Software Engineer 3',
      period: 'Aug 2023 – May 2024',
      location: 'Dallas, TX',
      type: 'Full-time',
      highlights: [
        'Built UI components for Xumo TV streaming platform (Comcast-Charter joint venture) using React 18',
        'Developed SPAs with React Hooks and Redux Toolkit for complex content discovery workflows',
        'Integrated RESTful APIs via Axios for real-time streaming content delivery across UI modules',
        'Implemented client-side memoization and HTTP caching to reduce redundant API calls',
        'Developed Java 11 Spring Boot microservices with OpenFeign and Resilience4j circuit breakers',
        'Designed event-driven microservices using Apache Kafka for asynchronous service decoupling',
        'Implemented IaC using Terraform on AWS; deployed containerized services on Kubernetes EKS',
        'Built CI/CD pipelines using Jenkins for automated build, test, and deployment workflows',
      ],
      tech: ['React 18', 'Redux Toolkit', 'TypeScript', 'Spring Boot', 'Kafka', 'AWS EKS', 'Terraform', 'Docker']
    },
    {
      company: 'Techlogyx Inc.',
      role: 'Java Developer with Angular',
      period: 'Jan 2023 – Apr 2023',
      location: 'Dallas, TX',
      type: 'Full-time',
      highlights: [
        'Built complete Angular 12 frontend for internal enterprise web application',
        'Implemented lazy loading with loadChildren reducing initial bundle size significantly',
        'Built complex reactive forms using FormBuilder and FormArray for multi-record data entry',
        'Created custom Angular pipes for data transformation and reusable display logic',
        'Applied HttpInterceptor for centralized token injection and error handling',
        'Enhanced performance using AOT compilation, tree shaking, and bundle analysis',
        'Wrote comprehensive Jasmine/Karma unit tests with TestBed and service mocks',
        'Built Java Spring Boot RESTful APIs with Spring Security and Apache Kafka integration',
      ],
      tech: ['Angular 12', 'TypeScript', 'RxJS', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AWS Lambda']
    },
    {
      company: 'NITCO Outsourcing',
      role: 'Software Developer',
      period: 'Oct 2017 – Dec 2021',
      location: 'Hyderabad, India',
      type: 'Full-time',
      highlights: [
        'Grew from fresher to primary frontend developer on consumer health & fitness Angular platform',
        'Executed full AngularJS → Angular migration: refactored controllers to RxJS Observable services',
        'Implemented Angular PWA with service workers for offline access and push notifications',
        'Integrated real-time WebSocket updates into Angular via RxJS Subject for live health metrics',
        'Built dynamic forms using ngx-formly with conditional visibility and async validators',
        'Implemented HttpInterceptor-based caching reducing server requests for reference data',
        'Integrated third-party nutrition APIs in Angular services with TypeScript interface mapping',
        'Built Spring Boot REST APIs for health profiles and workout tracking consumed via HttpClient',
      ],
      tech: ['Angular', 'AngularJS', 'RxJS', 'PWA', 'Spring Boot', 'Node.js', 'Oracle', 'AWS']
    },
  ];

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}