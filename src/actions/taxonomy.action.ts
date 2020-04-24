import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiPath } from '../constants/api';
import { Taxonomy } from '../models/taxonomy.model';
import { SfApiService } from '../services/api.service';
import { SfTaxonomyStore } from '../stores/taxonomy.store';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly taxonomyStore: SfTaxonomyStore,
  ) {}

  fetchBrands(params: Params = {}, loadMore?: boolean): Promise<Taxonomy[]> {
    const request = this.apiService.getItems(ApiPath.Brands, params) as Promise<Taxonomy[]>;

    Promise.resolve(request)
      .then(brands => this.taxonomyStore.brands = loadMore ? [...this.taxonomyStore.brands, ...brands] : brands)
      .catch(e => console.debug(e));

    return request;
  }

  fetchCategories(params: Params = {}, loadMore?: boolean): Promise<Taxonomy[]> {
    const request = this.apiService.getItems(ApiPath.Categories, params) as Promise<Taxonomy[]>;

    Promise.resolve(request)
      .then(categories => this.taxonomyStore.categories = loadMore
        ? [...this.taxonomyStore.categories, ...categories] : categories)
      .catch(e => console.debug(e));

    return request;
  }
}
