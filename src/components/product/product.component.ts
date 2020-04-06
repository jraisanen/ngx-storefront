import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Environment } from '../../types/environment';
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
    @Inject('env') readonly env: Environment,
  ) {}
}
