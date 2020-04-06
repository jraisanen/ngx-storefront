import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { SfProductAction } from '../actions/product.action';
import { FilterType } from '../constants/filter';
import { Pagination } from '../constants/pagination';
import { SORT_ORDER_MENU_ITEMS } from '../constants/sort-order';
import { SfTaxonomyStore } from '../stores/taxonomy.store';
import { SortOrder } from '../types/sort-order';
import { Taxonomy } from '../types/taxonomy';
import { SfPaginationService } from './pagination.service';

@Injectable({ providedIn: 'any' })
export class SfFilterService {
  selectedFilters: Taxonomy[] = [];
  selectedSortOrder = SORT_ORDER_MENU_ITEMS[0];

  get params(): Params {
    return {
      brands: this.selectedFilters
        .filter((filter: Taxonomy) => filter.type === FilterType.Brand)
        .map((brand: Taxonomy) => brand.id) as number[],
      category: this.taxonomyStore.category ? this.taxonomyStore.category.id : undefined,
      page: this.paginationService.page,
      limit: Pagination.Limit,
      sortBy: this.selectedSortOrder.sortBy,
      sortOrder: this.selectedSortOrder.sortOrder,
    };
  }

  constructor(
    private readonly paginationService: SfPaginationService,
    private readonly productAction: SfProductAction,
    private readonly taxonomyStore: SfTaxonomyStore,
  ) {}

  isFilterActive(taxonomy: Taxonomy): boolean {
    return this.selectedFilters.includes(taxonomy);
  }

  onClearFilters(): void {
    this.selectedFilters = [];
    this.updateProducts();
  }

  onFilter(taxonomy: Taxonomy): void {
    this.selectedFilters = this.isFilterActive(taxonomy)
      ? this.selectedFilters.filter((item: Taxonomy) => item !== taxonomy)
      : [...this.selectedFilters, taxonomy];
    this.updateProducts();
  }

  onSort(item: SortOrder): void {
    this.selectedSortOrder = item;
    this.updateProducts();
  }

  updateProducts(): void {
    this.paginationService.reset();
    Promise.resolve(this.productAction.fetchProducts(this.params))
      .catch(e => console.debug(e));
  }
}
