import {EntityStatus} from './entity-status';

export class ProjectTask {
  id: number;
  title: string;
  description: string;
  cardId: number;
  userId: number;
  startDate: number;
  endDate: number;
  status: EntityStatus;
}
