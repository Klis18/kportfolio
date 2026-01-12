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
        projectImage: this.projectsImgRoute+'orangehrm.png',
        projectName: 'Orange HRM',
        projectDescription: 'Automatización de pruebas del módulo X.',
        statusProject: statusProject.done,
        toolsProject: ['Cypress', 'JavaScript'],
        githubLink: ''
      },
      {
        id: 2,
        projectImage: this.projectsImgRoute+'saucelabs.png',
        projectName: 'SwagLabs',
        projectDescription: 'Automatización E2E del proceso de compras.',
        statusProject: statusProject.done,
        toolsProject: ['Selenium', 'Java'],
        githubLink: ''
      }
    ]
  );

  projectsDevList = signal<Project[]>([
    {
      id: 1,
      projectImage: this.projectsImgRoute+'salonxyz.png',
      projectName: 'Salón de Eventos XYZ',
      projectDescription: 'Landing page de Salón de eventos ubicado al sur de Guayaquil, incluye sección de cotizaciones de eventos.',
      statusProject: statusProject.done,
      toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML'],
      githubLink: ''
    },
    {
      id: 2,
      projectImage: this.projectsImgRoute+'indevcode.png',
      projectName: 'Indevcode',
      projectDescription: 'Sitio web de startup Indevcode.',
      statusProject: statusProject.done,
      toolsProject: ['Angular', 'Tailwind CSS', 'Typescript', 'HTML'],
      githubLink: ''
    },
    {
      id: 3,
      projectImage: this.projectsImgRoute+'cdiar.png',
      projectName: 'CDIAR',
      projectDescription: 'Plataforma web para mejorar el rendimiento académico de los estudiantes mediante el uso de inteligencia artificial y técnicas de estudios eficientes.',
      statusProject: statusProject.done,
      toolsProject: ['Angular','Tailwind CSS', 'Typescript','HTML', '.NET', 'C#'],
      githubLink: ''
    },
    {
      id: 4,
      projectImage: this.projectsImgRoute+'focusfly.png',
      projectName: 'Focusfly',
      projectDescription: 'Aplicación web para la gestión de tiempo y tareas de freelancers.',
      statusProject: statusProject.progress,
      toolsProject: ['Angular','Tailwind CSS', 'Typescript','HTML', '.NET', 'C#'],
      githubLink: ''
    }
  ]);
}
