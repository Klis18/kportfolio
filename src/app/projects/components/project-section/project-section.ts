import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectCard } from "../project-card/project-card";

@Component({
  selector: 'project-section',
  imports: [ProjectCard],
  templateUrl: './project-section.html',
  styles: ``,
})
export class ProjectSection {

  projectsList = input.required<Project[]>();

}
