import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from '../types/page';

@Injectable({ providedIn: 'root' })
export class SfPageStore {
  private readonly _page$: BehaviorSubject<Page> = new BehaviorSubject<Page>({} as Page);
  private readonly _pages$: BehaviorSubject<Page[]> = new BehaviorSubject<Page[]>([]);

  readonly page$: Observable<Page> = this._page$.asObservable();
  readonly pages$: Observable<Page[]> = this._pages$.asObservable();

  get page(): Page {
    return this._page$.getValue();
  }

  set page(page: Page) {
    this._page$.next(page);
  }

  get pages(): Page[] {
    return this._pages$.getValue();
  }

  set pages(pages: Page[]) {
    this._pages$.next(pages);
  }
}
