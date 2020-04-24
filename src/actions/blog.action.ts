import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { META } from '../constants/meta';
import { SfPage } from '../models/page.model';
import { SfMetaService } from '../services/meta.service';
import { SfPageAction } from './page.action';

@Injectable({ providedIn: 'root' })
export class SfBlogAction {
  constructor(
    private readonly metaService: SfMetaService,
    private readonly pageAction: SfPageAction,
  ) {}

  fetchView(params: Params = {}): Promise<SfPage[]> {
    const request = this.pageAction.fetchPages(params) as Promise<SfPage[]>;

    Promise.resolve(request)
      .then(() => this.metaService.data = META.blog)
      .catch(e => console.debug(e));

    return request;
  }
}
