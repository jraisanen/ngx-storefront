import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiPath } from '../constants/api';
import { META } from '../constants/meta';
import { SfPage } from '../models/page.model';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfPageStore } from '../stores/page.store';

@Injectable({ providedIn: 'root' })
export class SfPageAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly metaService: SfMetaService,
    private readonly pageStore: SfPageStore,
  ) {}

  fetchPage(params: Params): Promise<SfPage> {
    const request = this.apiService.getItem(`${ApiPath.Pages}/${params.key}`) as Promise<SfPage>;

    Promise.resolve(request)
      .then(page => this.pageStore.page = page)
      .catch(e => console.debug(e));

    return request;
  }

  fetchPages(params: Params = {}, loadMore?: boolean): Promise<SfPage[]> {
    const request = this.apiService.getItems(ApiPath.Pages, params) as Promise<SfPage[]>;

    Promise.resolve(request)
      .then(pages => this.pageStore.pages = loadMore ? [...this.pageStore.pages, ...pages] : pages)
      .catch(e => console.debug(e));

    return request;
  }

  fetchView(params: Params): Promise<SfPage> {
    const request = this.fetchPage(params) as Promise<SfPage>;

    Promise.resolve(request)
      .then(page => {
        this.metaService.data = page.id ? {
          description: page.title,
          title: page.title,
          url: page.key,
        } : META.not_found;
      })
      .catch(e => console.debug(e));

    return request;
  }
}
