import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Direction } from '../../../constants/cart';
import { SfCartModel } from '../../../models/cart.model';
import { SfCartService } from '../../../services/cart.service';
import { SfImageService } from '../../../services/image.service';

const LABELS = ['', 'Name', 'Price', 'Quantity', 'Total Price', ''];

@Component({
  selector: 'sf-cart-items',
  styleUrls: ['./cart-items.component.scss'],
  templateUrl: './cart-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCartItemsComponent {
  @Input() readonly cart = new SfCartModel();

  readonly Direction = Direction;
  readonly labels = LABELS;

  constructor(
    readonly cartService: SfCartService,
    readonly imageService: SfImageService,
  ) {}
}
