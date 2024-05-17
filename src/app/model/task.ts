import { EntityStatus } from './entity-status';
import { AppUser } from './AppUser';
import { TaskComment } from './task-comment';

export class Task {
    id         : number;
    title      : string;
    description: string;
    user       : AppUser;
    startDate  : number;
    endDate    : number;
    status     : EntityStatus;
    userId     : number;
    cardId     : number;
    arrange    : number;
    comments   : TaskComment[];
}
