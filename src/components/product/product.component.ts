import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfConfigStore } from '../../stores/config.store';
import { Product } from '../../types/product';

@Component({
  selector: 'sf-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfProductComponent {
  @Input() readonly product: Product;

  constructor(
    readonly configStore: SfConfigStore,
  ) {}
}
