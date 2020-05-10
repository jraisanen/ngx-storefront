import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiPath } from '../constants/api';
import { SfTaxonomy } from '../models/taxonomy.model';
import { SfApiService } from '../services/api.service';
import { SfTaxonomyStore } from '../stores/taxonomy.store';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly taxonomyStore: SfTaxonomyStore,
  ) {}

  async fetchBrands(params: Params = {}, loadMore?: boolean): Promise<SfTaxonomy[]> {
    const request = this.apiService.getItems(ApiPath.Brands, params) as Promise<SfTaxonomy[]>;

    Promise.resolve(request)
      .then(brands => this.taxonomyStore.brands = loadMore ? [...this.taxonomyStore.brands, ...brands] : brands)
      .catch(e => console.debug(e));

    return request;
  }

  async fetchCategories(params: Params = {}, loadMore?: boolean): Promise<SfTaxonomy[]> {
    const request = this.apiService.getItems(ApiPath.Categories, params) as Promise<SfTaxonomy[]>;

    Promise.resolve(request)
      .then(categories => this.taxonomyStore.categories = loadMore
        ? [...this.taxonomyStore.categories, ...categories] : categories)
      .catch(e => console.debug(e));

    return request;
  }
}
