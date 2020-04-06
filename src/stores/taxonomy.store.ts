import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Taxonomy } from '../types/taxonomy';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyStore {
  private readonly _brands$: BehaviorSubject<Taxonomy[]> = new BehaviorSubject<Taxonomy[]>([]);
  private readonly _category$: BehaviorSubject<Taxonomy> = new BehaviorSubject<Taxonomy>({} as Taxonomy);
  private readonly _categories$: BehaviorSubject<Taxonomy[]> = new BehaviorSubject<Taxonomy[]>([]);
  private readonly _subCategories$: BehaviorSubject<Taxonomy[]> = new BehaviorSubject<Taxonomy[]>([]);

  readonly brands$: Observable<Taxonomy[]> = this._brands$.asObservable();
  readonly category$: Observable<Taxonomy> = this._category$.asObservable();
  readonly categories$: Observable<Taxonomy[]> = this._categories$.asObservable();
  readonly subCategories$: Observable<Taxonomy[]> = this._subCategories$.asObservable();

  get brands(): Taxonomy[] {
    return this._brands$.getValue();
  }

  set brands(brands: Taxonomy[]) {
    this._brands$.next(brands);
  }

  get category(): Taxonomy {
    return this._category$.getValue();
  }

  set category(category: Taxonomy) {
    this._category$.next(category);
  }

  get categories(): Taxonomy[] {
    return this._categories$.getValue();
  }

  set categories(categories: Taxonomy[]) {
    this._categories$.next(categories);
  }

  get subCategories(): Taxonomy[] {
    return this._subCategories$.getValue();
  }

  set subCategories(subCategories: Taxonomy[]) {
    this._subCategories$.next(subCategories);
  }
}