import { createSelector } from '@ngrx/store';
import { SfOrder } from '../models';
import { ItemState, SfState } from '../reducers';

type OrderState = ItemState<SfOrder>;

const state = ({ itemState }: SfState): OrderState => itemState as OrderState;

export const selectOrder = createSelector(state, ({ order }: OrderState) => order || {});
export const selectOrders = createSelector(state, ({ orders }: OrderState) => orders || []);
