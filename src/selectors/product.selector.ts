import { createSelector } from '@ngrx/store';
import { SfProduct } from '../models';
import { ItemState, SfState } from '../reducers';

type ProductState = ItemState<SfProduct>;

const state = ({ itemState }: SfState): ProductState => itemState as ProductState;

export const selectProduct = createSelector(state, ({ product }: ProductState) => product || {});
export const selectProducts = createSelector(state, ({ products }: ProductState) => products || []);
