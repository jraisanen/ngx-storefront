import { createSelector } from '@ngrx/store';
import { SfCart } from '../models';
import { ItemState, SfState } from '../reducers';

type CartState = ItemState<SfCart>;

const state = ({ itemState }: SfState): CartState => itemState as CartState;

export const selectCart = createSelector(state, ({ cart }: CartState) => cart || {});
