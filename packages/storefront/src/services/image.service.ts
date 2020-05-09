import { Injectable } from '@angular/core';
import { Image, ImageModel } from '@jraisanen/ngx-elements';
import { SfConfigStore } from '../stores/config.store';
import { SfProduct } from '../models/product.model';
import { SfTaxonomy } from '../models/taxonomy.model';

@Injectable({ providedIn: 'root' })
export class SfImageService {
  constructor(
    private readonly configStore: SfConfigStore,
  ) {}

  categoryImage(category: SfTaxonomy): Image {
    const image = category.image ? category.image.src : '';
    return new ImageModel({ src: this.categoryImageUrl(image), alt: category.name });
  }

  categoryImageUrl(image: string): string {
    return this.configStore.config.baseMediaUrl + 'catalog/category/' + image;
  }

  productImage(product: SfProduct): Image {
    const image = product.images && product.images[0] ? product.images[0].src : '';
    return new ImageModel({ src: this.productImageUrl(image), alt: product.name });
  }

  productImageUrl(image: string): string {
    return this.configStore.config.baseMediaUrl + 'catalog/product/' + image;
  }
}
