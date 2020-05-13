import { Injectable } from '@angular/core';
import { Image, ImageModel } from '@jraisanen/ngx-elements';
import { SfCartItem, SfProduct, SfTaxonomy } from '../models';
import { SfConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class SfImageService {
  constructor(
    private readonly configService: SfConfigService,
  ) {}

  categoryImage({ image, name }: SfTaxonomy): Image {
    return new ImageModel({ src: this.categoryImageUrl(image?.src || ''), alt: name });
  }

  categoryImageUrl(image: string): string {
    return `${this.configService.config.baseMediaUrl}catalog/category/${image}`;
  }

  productImage({ images, name }: SfProduct | SfCartItem, index = 0): Image {
    return new ImageModel({ src: this.productImageUrl(images?.[index]?.src || ''), alt: name });
  }

  productImageUrl(image: string): string {
    return `${this.configService.config.baseMediaUrl}catalog/product/${image}`;
  }
}
