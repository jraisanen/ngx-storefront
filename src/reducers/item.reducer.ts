import { Action, createReducer, on } from '@ngrx/store';
import { ItemAction } from '../actions';
import { SfModel } from '../models';

export interface ItemState<T> {
  [key: string]: T | T[];
}

const initialState: ItemState<SfModel> = {};

const reducer = createReducer(
  initialState,
  on(ItemAction.getSuccess, (state, { type, ...payload }) => ({ ...state, ...payload })),
  on(ItemAction.getError, (state, { error }) => ({ ...state, error })),
);

export default (state: ItemState<SfModel> | undefined, action: Action): ItemState<SfModel> => reducer(state, action);
