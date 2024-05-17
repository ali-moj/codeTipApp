import {OperationResult} from './OperationResult';

export interface GenericResponse<T> {

  result : T;
  operationResult :OperationResult ;
  message:string;

}
