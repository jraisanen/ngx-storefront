import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Taxonomy } from '../models/taxonomy.model';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyStore {
  private readonly _brands$: BehaviorSubject<Taxonomy[]> = new BehaviorSubject<Taxonomy[]>([]);
  private readonly _category$: BehaviorSubject<Taxonomy> = new BehaviorSubject<Taxonomy>(new Taxonomy());
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
    this._brands$.next(brands.map(brand => new Taxonomy(brand)));
  }

  get category(): Taxonomy {
    return this._category$.getValue();
  }

  set category(category: Taxonomy) {
    this._category$.next(new Taxonomy(category));
  }

  get categories(): Taxonomy[] {
    return this._categories$.getValue();
  }

  set categories(categories: Taxonomy[]) {
    this._categories$.next(categories.map(category => new Taxonomy(category)));
  }

  get subCategories(): Taxonomy[] {
    return this._subCategories$.getValue();
  }

  set subCategories(subCategories: Taxonomy[]) {
    this._subCategories$.next(subCategories.map(subCategory => new Taxonomy(subCategory)));
  }
}
