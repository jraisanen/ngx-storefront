import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfCartModel } from '../../../models';
import { SfCartService } from '../../../services';

@Component({
  selector: 'sf-cart-summary',
  styleUrls: ['./cart-summary.component.scss'],
  templateUrl: './cart-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCartSummaryComponent {
  @Input() readonly cart = new SfCartModel();

  constructor(
    readonly cartService: SfCartService,
  ) {}
}
