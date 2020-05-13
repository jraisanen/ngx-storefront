import { createAction, props } from '@ngrx/store';
import { SfModel } from '../models';

export enum ItemActionType {
  GetItemSuccess = '[Item] Get Success',
  GetError = '[Item] Get Error',
}

interface ItemParams<T> {
  [key: string]: T | T[];
}

export const ItemAction = {
  getSuccess: createAction(ItemActionType.GetItemSuccess, props<ItemParams<SfModel>>()),
  getError: createAction(ItemActionType.GetError, props<ItemParams<SfModel>>()),
}
