import { EntityStatus } from './entity-status';
import { AppUser } from './AppUser';

export class Project {
    id: number;
    title: string;
    description: string;
    startDate: number;
    endDate: number;
    status: EntityStatus;
    usersRequest: number[];
    users: AppUser[];
}
