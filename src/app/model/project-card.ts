import {ProjectTask} from './project-task';

export class ProjectCard {
  id: number;
  projectId: number;
  title: string;
  tasks: ProjectTask[];
}
