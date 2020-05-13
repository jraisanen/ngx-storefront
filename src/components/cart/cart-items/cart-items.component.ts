import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Direction } from '../../../constants';
import { SfCartModel } from '../../../models';
import { SfCartService, SfImageService } from '../../../services';

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
