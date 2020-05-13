import { ActionReducerMap } from '@ngrx/store';
import { SfModel } from '../models';
import itemReducer, { ItemState } from './item.reducer';

export * from './item.reducer';

export interface SfState {
  itemState: ItemState<SfModel>;
}

export const reducers: ActionReducerMap<SfState> = {
  itemState: itemReducer,
};
