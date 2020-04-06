import { Injectable } from '@angular/core';
import { PAGE_BOTTOM_OFFSET, Pagination } from '../constants/pagination';
import { T } from '../types/storefront';

@Injectable({ providedIn: 'any' })
export class SfPaginationService {
  isLoading = false;
  limit = Pagination.Limit;
  page = Pagination.Page;

  loadMore(items: T[]): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - PAGE_BOTTOM_OFFSET
      && items.length >= Pagination.Limit && !this.isLoading;
  }

  reset(): void {
    this.page = Pagination.Page;
  }
}
