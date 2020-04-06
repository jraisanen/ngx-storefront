import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SfCartService } from '../../../services/cart.service';

@Component({
  selector: 'sf-cart-summary',
  styleUrls: ['./cart-summary.component.scss'],
  templateUrl: './cart-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCartSummaryComponent {
  constructor(
    readonly cartService: SfCartService,
  ) {}
}
