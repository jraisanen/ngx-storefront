import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { SfProductAction } from '../actions';
import { FilterType, Pagination, SORT_ORDER_MENU_ITEMS } from '../constants';
import { SfTaxonomy } from '../models';
import { SfSortOrder } from '../types';
import { SfPaginationService } from './pagination.service';
import { SfTaxonomyService } from './taxonomy.service';

@Injectable({ providedIn: 'any' })
export class SfFilterService {
  selectedFilters: SfTaxonomy[] = [];
  selectedSortOrder = SORT_ORDER_MENU_ITEMS[0];

  get params(): Params {
    return {
      brands: this.selectedFilters
        .filter((filter: SfTaxonomy) => filter.type === FilterType.Brand)
        .map((brand: SfTaxonomy) => brand.id),
      category: this.taxonomyService.category?.id || undefined,
      page: this.paginationService.page,
      limit: Pagination.Limit,
      sortBy: this.selectedSortOrder.sortBy,
      sortOrder: this.selectedSortOrder.sortOrder,
    };
  }

  constructor(
    private readonly paginationService: SfPaginationService,
    private readonly productAction: SfProductAction,
    private readonly taxonomyService: SfTaxonomyService,
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
    this.productAction.getProducts({ params: this.params });
  }
}
