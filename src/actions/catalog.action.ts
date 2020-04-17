import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { META } from '../constants/meta';
import { SfMetaService } from '../services/meta.service';
import { SfTaxonomyService } from '../services/taxonomy.service';
import { SfTaxonomyStore } from '../stores/taxonomy.store';
import { Taxonomy } from '../types/taxonomy';
import { SfTaxonomyAction } from './taxonomy.action';

@Injectable({ providedIn: 'root' })
export class SfCatalogAction {
  constructor(
    private readonly metaService: SfMetaService,
    private readonly taxonomyAction: SfTaxonomyAction,
    private readonly taxonomyService: SfTaxonomyService,
    private readonly taxonomyStore: SfTaxonomyStore,
  ) {}

  fetchView(routeParams, params: Params = {}): Promise<Taxonomy[]> {
    const request = this.taxonomyAction.fetchCategories(params) as Promise<Taxonomy[]>;

    Promise.resolve(request)
      .then(categories => {
        this.taxonomyStore.category = this.taxonomyService.findCategory(categories, routeParams);
        this.metaService.data = this.taxonomyStore.category.id ? {
          title: this.taxonomyStore.category.name,
          description: this.taxonomyStore.category.description,
          url: this.taxonomyStore.category.key,
        } : META.not_found;
      })
      .catch(e => console.debug(e));

    return request;
  }
}
