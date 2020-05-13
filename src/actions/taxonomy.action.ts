import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { createAction, props, Store } from '@ngrx/store';
import { LoadMore } from '../constants';
import { SfTaxonomy } from '../models';
import { SfState } from '../reducers';

export enum TaxonomyActionType {
  GetBrands = '[Taxonomy] Get Brands',
  GetCategories = '[Taxonomy] Get Categories',
  GetCategory = '[Taxonomy] Get Category',
}

interface CategoryParams {
  category: SfTaxonomy;
}

interface TaxonomyParams extends LoadMore {
  params: Params;
}

export const TaxonomyAction = {
  getBrands: createAction(TaxonomyActionType.GetBrands, props<TaxonomyParams>()),
  getCategories: createAction(TaxonomyActionType.GetCategories, props<TaxonomyParams>()),
  getCategory: createAction(TaxonomyActionType.GetCategory, props<CategoryParams>()),
}

@Injectable({ providedIn: 'root' })
export class SfTaxonomyAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  getBrands(params: TaxonomyParams): void {
    this.store.dispatch(TaxonomyAction.getBrands(params));
  }

  getCategories(params: TaxonomyParams): void {
    this.store.dispatch(TaxonomyAction.getCategories(params));
  }

  getCategory(params: CategoryParams): void {
    this.store.dispatch(TaxonomyAction.getCategory(params));
  }
}
