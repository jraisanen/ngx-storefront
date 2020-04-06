import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { SORT_ORDER_MENU_ITEMS } from '../../constants/sort-order';
import { SortOrder } from '../../types/sort-order';

@Component({
  selector: 'sf-sort-order',
  styleUrls: ['./sort-order.component.scss'],
  templateUrl: './sort-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfSortOrderComponent {
  @Output() onChange: EventEmitter<SortOrder> = new EventEmitter();

  isSortOrderMenuActive = false;
  selectedSortOrder = SORT_ORDER_MENU_ITEMS[0];
  sortOrderMenuItems = SORT_ORDER_MENU_ITEMS;

  onSelect(item: SortOrder): void {
    this.isSortOrderMenuActive = false;
    this.selectedSortOrder = item;
    this.onChange.emit(item);
  }
}
