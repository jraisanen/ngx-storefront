import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({ providedIn: 'root' })
export class SfPageStore {
  private readonly _page$: BehaviorSubject<Page> = new BehaviorSubject<Page>(new Page());
  private readonly _pages$: BehaviorSubject<Page[]> = new BehaviorSubject<Page[]>([]);

  readonly page$: Observable<Page> = this._page$.asObservable();
  readonly pages$: Observable<Page[]> = this._pages$.asObservable();

  get page(): Page {
    return this._page$.getValue();
  }

  set page(page: Page) {
    this._page$.next(new Page(page));
  }

  get pages(): Page[] {
    return this._pages$.getValue();
  }

  set pages(pages: Page[]) {
    this._pages$.next(pages.map(page => new Page(page)));
  }
}
