import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { SfProductAction } from '../actions/product.action';
import { FilterType } from '../constants/filter';
import { Pagination } from '../constants/pagination';
import { SORT_ORDER_MENU_ITEMS } from '../constants/sort-order';
import { SfTaxonomy } from '../models/taxonomy.model';
import { SfTaxonomyStore } from '../stores/taxonomy.store';
import { SfSortOrder } from '../types/sort-order';
import { SfPaginationService } from './pagination.service';

@Injectable({ providedIn: 'any' })
export class SfFilterService {
  selectedFilters: SfTaxonomy[] = [];
  selectedSortOrder = SORT_ORDER_MENU_ITEMS[0];

  get params(): Params {
    return {
      brands: this.selectedFilters
        .filter((filter: SfTaxonomy) => filter.type === FilterType.Brand)
        .map((brand: SfTaxonomy) => brand.id) as number[],
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

  isFilterActive(taxonomy: SfTaxonomy): boolean {
    return this.selectedFilters.includes(taxonomy);
  }

  onClearFilters(): void {
    this.selectedFilters = [];
    this.updateProducts();
  }

  onFilter(taxonomy: SfTaxonomy): void {
    this.selectedFilters = this.isFilterActive(taxonomy)
      ? this.selectedFilters.filter((item: SfTaxonomy) => item !== taxonomy)
      : [...this.selectedFilters, taxonomy];
    this.updateProducts();
  }

  onSort(item: SfSortOrder): void {
    this.selectedSortOrder = item;
    this.updateProducts();
  }

  updateProducts(): void {
    this.paginationService.reset();
    Promise.resolve(this.productAction.fetchProducts(this.params))
      .catch(e => console.debug(e));
  }
}
