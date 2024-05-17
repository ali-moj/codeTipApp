import {Category} from './Category';
import {Tag} from './Tag';
import {FileResponse} from './file-response';
import {TopicSelectList} from './TopicSelectList';

export class TopicResponse {

  id: number;
  title: string;
  bodyText: string;
  projects:string;

  categories: Category[] = [];
  tags :Tag[] =[];
  files:FileResponse[] =[];
  related:TopicSelectList[] =[]

}
