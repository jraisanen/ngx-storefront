import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiPath } from '../constants/api';
import { META } from '../constants/meta';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfPageStore } from '../stores/page.store';
import { Page } from '../types/page';

@Injectable({ providedIn: 'root' })
export class SfPageAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly metaService: SfMetaService,
    private readonly pageStore: SfPageStore,
  ) {}

  fetchPage(params: Params): Promise<Page> {
    const request = this.apiService.getItem(`${ApiPath.Pages}/${params.key}`) as Promise<Page>;

    Promise.resolve(request)
      .then(page => this.pageStore.page = page)
      .catch(e => console.debug(e));

    return request;
  }

  fetchPages(params: Params = {}): Promise<Page[]> {
    const request = this.apiService.getItems(ApiPath.Pages, params) as Promise<Page[]>;

    Promise.resolve(request)
      .then(pages => this.pageStore.pages = pages)
      .catch(e => console.debug(e));

    return request;
  }

  fetchView(params: Params): Promise<Page> {
    const request = this.fetchPage(params) as Promise<Page>;

    Promise.resolve(request)
      .then(page => {
        this.metaService.data = page ? {
          description: page.title,
          title: page.title,
          url: page.key,
        } : META.not_found;
      })
      .catch(e => console.debug(e));

    return request;
  }
}
