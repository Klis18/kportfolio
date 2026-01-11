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
  )
}
