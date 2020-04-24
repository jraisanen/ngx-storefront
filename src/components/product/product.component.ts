import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfProduct } from '../../models/product.model';
import { SfConfigStore } from '../../stores/config.store';

@Component({
  selector: 'sf-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfProductComponent {
  @Input() readonly product: SfProduct;

  constructor(
    readonly configStore: SfConfigStore,
  ) {}
}
