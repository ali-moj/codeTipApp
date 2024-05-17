import {Category} from './Category';
import {Tag} from './Tag';

export interface TopicList {

  id: number;
  title: string;
  bodyText: string;
  projects:string;
  categories: Category[];
  tags :Tag[];
}
