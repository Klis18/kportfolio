import { Component, computed, inject, signal } from '@angular/core';
import { ProjectsServices } from '../../services/projects-services';
import { ProjectSection } from "../../components/project-section/project-section";

@Component({
  selector: 'app-projects',
  imports: [ProjectSection],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {

  projectsServices = inject(ProjectsServices);
  qaProjects       = computed(this.projectsServices.projectsQAList);
  devProjects      = computed(this.projectsServices.projectsDevList);
  projectsRole = 'qa';

  ViewProjectByRole(role: string){
    this.projectsRole = role;
  }

}
