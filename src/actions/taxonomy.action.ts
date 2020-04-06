import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { SfTaxonomyStore } from '../stores/taxonomy.store';
import { Taxonomy } from '../types/taxonomy';
import { ApiPath } from '../constants/api';
import { SfApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly taxonomyStore: SfTaxonomyStore,
  ) {}

  fetchBrands(params: Params = {}): Promise<Taxonomy[]> {
    const request = this.apiService.getItems(ApiPath.Brands, params) as Promise<Taxonomy[]>;

    Promise.resolve(request)
      .then(brands => this.taxonomyStore.brands = brands)
      .catch(e => console.debug(e));

    return request;
  }

  fetchCategories(params: Params = {}): Promise<Taxonomy[]> {
    const request = this.apiService.getItems(ApiPath.Categories, params) as Promise<Taxonomy[]>;

    Promise.resolve(request)
      .then(categories => this.taxonomyStore.categories = categories)
      .catch(e => console.debug(e));

    return request;
  }
}
