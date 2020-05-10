import { Injectable } from '@angular/core';
import { PAGE_BOTTOM_OFFSET, Pagination } from '../constants/pagination';
import { T } from '../types/storefront';

@Injectable({ providedIn: 'any' })
export class SfPaginationService {
  isLoading = false;
  limit = Pagination.Limit;
  page = Pagination.Page;

  loadMore(items: T[], request: () => Promise<T[]>): void {
    const shouldLoadMore = window.innerHeight + window.scrollY >= document.body.offsetHeight - PAGE_BOTTOM_OFFSET
      && items.length >= this.limit * this.page
      && !this.isLoading;

    if (!shouldLoadMore) {
      return;
    }
    this.isLoading = true;
    this.page++;

    Promise.resolve(request())
      .then(() => this.isLoading = false)
      .catch(e => console.debug(e));
  }

  reset(): void {
    this.page = Pagination.Page;
  }
}
