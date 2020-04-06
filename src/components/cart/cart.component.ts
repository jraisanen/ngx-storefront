import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { SfCartService } from '../../services/cart.service';
import { SfCartStore } from '../../stores/cart.store';

@Component({
  selector: 'sf-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCartComponent {
  isCartDropdownActive = false;

  constructor(
    readonly cartService: SfCartService,
    readonly cartStore: SfCartStore,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @HostListener('document:click', ['$event']) onClick(_: Event): void {
    this.isCartDropdownActive = false;
  }
}
