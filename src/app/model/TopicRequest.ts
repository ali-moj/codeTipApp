import {FileRequest} from './file-request';

export class TopicRequest {
  id: number;
  title: string;
  bodyText: string;
  projects: number;
  categories: number[] = [];
  tags: number[] = [];
  relatedTopic: number[] = [];
  files: FileRequest[] = [];

}
