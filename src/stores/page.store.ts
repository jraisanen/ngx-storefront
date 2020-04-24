import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfPage, SfPageModel } from '../models/page.model';

@Injectable({ providedIn: 'root' })
export class SfPageStore {
  private readonly _page$: BehaviorSubject<SfPage> = new BehaviorSubject<SfPage>(new SfPageModel());
  private readonly _pages$: BehaviorSubject<SfPage[]> = new BehaviorSubject<SfPage[]>([]);

  readonly page$: Observable<SfPage> = this._page$.asObservable();
  readonly pages$: Observable<SfPage[]> = this._pages$.asObservable();

  get page(): SfPage {
    return this._page$.getValue();
  }

  set page(page: SfPage) {
    this._page$.next(new SfPageModel(page));
  }

  get pages(): SfPage[] {
    return this._pages$.getValue();
  }

  set pages(pages: SfPage[]) {
    this._pages$.next(pages.map(page => new SfPageModel(page)));
  }
}
