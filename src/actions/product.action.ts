import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiPath } from '../constants/api';
import { META } from '../constants/meta';
import { SfProduct } from '../models/product.model';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfProductStore } from '../stores/product.store';

@Injectable({ providedIn: 'root' })
export class SfProductAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly metaService: SfMetaService,
    private readonly productStore: SfProductStore,
  ) {}

  fetchProduct(params: Params): Promise<SfProduct> {
    const request = this.apiService.getItem(`${ApiPath.Products}/${params.key}`) as Promise<SfProduct>;

    Promise.resolve(request)
      .then(product => this.productStore.product = product)
      .catch(e => console.debug(e));

    return request;
  }

  fetchProducts(params: Params = {}, loadMore?: boolean): Promise<SfProduct[]> {
    const request = this.apiService.getItems(ApiPath.Products, params) as Promise<SfProduct[]>;

    Promise.resolve(request)
      .then(products => this.productStore.products = loadMore
        ? [...this.productStore.products, ...products]
        : products)
      .catch(e => console.debug(e));

    return request;
  }

  fetchView(params: Params): Promise<SfProduct> {
    const request = this.fetchProduct(params) as Promise<SfProduct>;

    Promise.resolve(request)
      .then(product => {
        this.metaService.data = product.id ? {
          description: product.name,
          title: product.name,
          url: `product/${product.key}`,
        } : META.not_found;
      })
      .catch(e => console.debug(e));

    return request;
  }
}
