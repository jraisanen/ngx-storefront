import { createSelector } from '@ngrx/store';
import { SfConfig } from '../models';
import { ItemState, SfState } from '../reducers';

type ConfigState = ItemState<SfConfig>;

const state = ({ itemState }: SfState): ConfigState => itemState as ConfigState;

export const selectConfig = createSelector(state, ({ config }: ConfigState) => config || {});
export const selectConfigs = createSelector(state, ({ configs }: ConfigState) => configs || []);
