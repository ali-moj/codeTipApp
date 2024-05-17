import {OperationResult} from './OperationResult';

export interface GenericPageableResponse<T> {
  result: T;
  operationResult: OperationResult;
  message: string;
  from: number;
  size: number;
  sort: string;
  reverse: boolean;
  total: number;
  pageCount: number;
}
