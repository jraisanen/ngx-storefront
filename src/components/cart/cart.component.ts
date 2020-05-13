import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { SfCartAction } from '../../actions';
import { SfCartService } from '../../services';

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
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @HostListener('document:click', ['$event']) onClick(_: Event): void {
    this.isDropdownActive = false;
  }

  onDropdown(event: MouseEvent): void {
    this.isDropdownActive = !this.isDropdownActive;
    if (this.isDropdownActive) {
      this.cartAction.getCart();
    }
    event.stopPropagation();
  }
}
