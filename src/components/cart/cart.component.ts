import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { SfCartAction } from '../../actions/cart.action';
import { SfCartService } from '../../services/cart.service';
import { SfCartStore } from '../../stores/cart.store';

@Component({
  selector: 'sf-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCartComponent {
  isDropdownActive = false;

  constructor(
    readonly cartAction: SfCartAction,
    readonly cartService: SfCartService,
    readonly cartStore: SfCartStore,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @HostListener('document:click', ['$event']) onClick(_: Event): void {
    this.isDropdownActive = false;
  }

  onDropdown(event: MouseEvent): void {
    this.isDropdownActive = !this.isDropdownActive;
    if (this.isDropdownActive) {
      Promise.resolve(this.cartAction.fetchCart())
        .catch(e => console.debug(e));
    }
    event.stopPropagation();
  }
}
