import { Component, input} from '@angular/core';
import { Project, statusProject } from '../../interfaces/project.interface';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.html',
  styles: ``,
})
export class ProjectCard {

  qaProject = input.required<Project>()

  statusProject = statusProject;
}
