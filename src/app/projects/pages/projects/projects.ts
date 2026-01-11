import { Component, computed, inject, signal } from '@angular/core';
import { ProjectsServices } from '../../services/projects-services';
import { ProjectCard } from "../../components/project-card/project-card";

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {

  projectsServices = inject(ProjectsServices);

  qaProjects = computed(this.projectsServices.projectsQAList);
  devProjects = signal<string>('');

}
