import { createSelector } from '@ngrx/store';
import { SfTaxonomy } from '../models';
import { ItemState, SfState } from '../reducers';

type TaxonomyState = ItemState<SfTaxonomy>;

const state = ({ itemState }: SfState): TaxonomyState => itemState as TaxonomyState;

export const selectBrands = createSelector(state, ({ brands }: TaxonomyState) => brands || []);
export const selectCategories = createSelector(state, ({ categories }: TaxonomyState) => categories || []);
export const selectCategory = createSelector(state, ({ category }: TaxonomyState) => category || {});
export const selectSubCategories = createSelector(state, ({ subCategories }: TaxonomyState) => subCategories || []);
