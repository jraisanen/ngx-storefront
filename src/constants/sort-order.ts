import { SfSortOrder } from '../types/sort-order';

export const SORT_ORDER_MENU_ITEMS: SfSortOrder[] = [
  {
    label: 'Newest',
    sortBy: 'created_at',
    sortOrder: 'desc',
  },
  {
    label: 'Price High to Low',
    sortBy: 'price',
    sortOrder: 'desc',
  },
  {
    label: 'Price Low to High',
    sortBy: 'price',
    sortOrder: 'asc',
  },
];
