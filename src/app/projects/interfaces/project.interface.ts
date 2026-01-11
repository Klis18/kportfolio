export interface Project{
    id: number;
    projectImage: string;
    projectName: string;
    projectDescription: string;
    statusProject: statusProject;
    toolsProject: string[];
    githubLink: string;
    projectPageLink?: string;
}

export enum statusProject{
    pending = 'Pendiente',
    progress = 'En proceso',
    done = 'Finalizado'
}