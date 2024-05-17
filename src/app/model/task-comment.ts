import { AppUser } from './AppUser';
import { ProjectTask } from './project-task';

export class TaskComment {
    id        : number;
    user      : AppUser;
    task      : ProjectTask;
    createDate: number;
    body      : string;
    taskId    : number;
}
