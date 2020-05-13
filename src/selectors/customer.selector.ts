import { createSelector } from '@ngrx/store';
import { SfCustomer } from '../models';
import { ItemState, SfState } from '../reducers';

type CustomerState = ItemState<SfCustomer>;

const state = ({ itemState }: SfState): CustomerState => itemState as CustomerState;

export const selectCustomer = createSelector(state, ({ customer }: CustomerState) => customer || {});
