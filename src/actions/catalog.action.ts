import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { META } from '../constants/meta';
import { SfTaxonomy } from '../models/taxonomy.model';
import { SfMetaService } from '../services/meta.service';
import { SfTaxonomyService } from '../services/taxonomy.service';
import { SfTaxonomyStore } from '../stores/taxonomy.store';
import { SfTaxonomyAction } from './taxonomy.action';

@Injectable({ providedIn: 'root' })
export class SfCatalogAction {
  constructor(
    private readonly metaService: SfMetaService,
    private readonly taxonomyAction: SfTaxonomyAction,
    private readonly taxonomyService: SfTaxonomyService,
    private readonly taxonomyStore: SfTaxonomyStore,
  ) {}

  async fetchView(routeParams: Params, params: Params = {}): Promise<SfTaxonomy[]> {
    const request = this.taxonomyAction.fetchCategories(params);

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
