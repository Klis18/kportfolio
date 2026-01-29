import { Injectable, signal } from '@angular/core';
import { Project, statusProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServices {
  
  projectsImgRoute: string = '/images/projects/';
  projectsQAList = signal<Project[]>(
    [
      {
        id: 1,
        projectImage: this.projectsImgRoute + 'orangehrm.png',
        projectName: 'Orange HRM',
        projectDescription: 'Automatización de pruebas de las subopciones correspondientes a Admin y Recruitment',
        statusProject: statusProject.progress,
        toolsProject: ['Cypress', 'JavaScript'],
        githubLink: 'https://github.com/Klis18/OrangeHRM-Cypress',
        projectPageLink: ''
      },
      {
        id: 2,
        projectImage: this.projectsImgRoute + 'saucelabs.png',
        projectName: 'SwagLabs',
        projectDescription: 'Automatización E2E del proceso de compras.',
        statusProject: statusProject.done,
        toolsProject: ['Selenium', 'Java'],
        githubLink: 'https://github.com/Klis18/swaglabs-testing',
        projectPageLink: ''
      },
      {
        id: 3,
        projectImage: this.projectsImgRoute + 'calculator.png',
        projectName: 'Calculator Collection',
        projectDescription: 'Automatización de pruebas SOAP Calculator.',
        statusProject: statusProject.done,
        toolsProject: ['Postman'],
        githubLink: 'https://github.com/Klis18/Calculator-Collection',
        projectPageLink: ''
      }
    ]
  );

  projectsDevList = signal<Project[]>([
    {
      id: 1,
      projectImage: this.projectsImgRoute + 'salonxyz.png',
      projectName: 'Salón de Eventos XYZ',
      projectDescription: 'Landing page de Salón de eventos ubicado al sur de Guayaquil, incluye sección de cotizaciones de eventos.',
      statusProject: statusProject.done,
      toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML'],
      githubLink: 'https://github.com/Klis18/salon-xyz-website',
      projectPageLink: 'https://demo-salon-xyz.vercel.app/'
    },
     {
       id: 2,
       projectImage: this.projectsImgRoute + 'indevcode.png',
       projectName: 'Indevcode',
       projectDescription: 'Desarrollo del sitio web para el emprendimiento Indevcode.',
       statusProject: statusProject.done,
       toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML'],
       githubLink: '',
       projectPageLink: 'https://www.indevcode.com/'
     },
    {
      id: 3,
      projectImage: this.projectsImgRoute + 'cdiar.png',
      projectName: 'CDIAR',
      projectDescription: 'Plataforma web para mejorar el rendimiento académico de los estudiantes mediante el uso de inteligencia artificial y técnicas de estudios eficientes.',
      statusProject: statusProject.done,
      toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML', '.NET', 'C#'],
      githubLink: 'https://github.com/Klis18/CDIAR-2.0',
      projectPageLink: ''
    },
    {
      id: 4,
      projectImage: this.projectsImgRoute + 'focusfly.png',
      projectName: 'Focusfly',
      projectDescription: 'Aplicación web para la gestión de tiempo y tareas de freelancers.',
      statusProject: statusProject.progress,
      toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML', '.NET', 'C#'],
      githubLink: 'https://github.com/Klis18/FrontFocusFly',
      projectPageLink: ''
    },
    {
      id: 5,
      projectImage: this.projectsImgRoute + 'klisgif.png',
      projectName: 'KlisGif App',
      projectDescription: 'Buscador de Gifs y visualización de Gifs en tendencia.',
      statusProject: statusProject.done,
      toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML'],
      githubLink: 'https://github.com/Klis18/klis-gifs-app',
      projectPageLink: ''
    },
  ]);
}
