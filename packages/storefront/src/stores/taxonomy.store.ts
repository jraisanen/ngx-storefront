import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfTaxonomy, SfTaxonomyModel } from '../models/taxonomy.model';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyStore {
  private readonly _brands$: BehaviorSubject<SfTaxonomy[]> = new BehaviorSubject<SfTaxonomy[]>([]);
  private readonly _category$: BehaviorSubject<SfTaxonomy> = new BehaviorSubject<SfTaxonomy>(new SfTaxonomyModel());
  private readonly _categories$: BehaviorSubject<SfTaxonomy[]> = new BehaviorSubject<SfTaxonomy[]>([]);
  private readonly _subCategories$: BehaviorSubject<SfTaxonomy[]> = new BehaviorSubject<SfTaxonomy[]>([]);

  readonly brands$: Observable<SfTaxonomy[]> = this._brands$.asObservable();
  readonly category$: Observable<SfTaxonomy> = this._category$.asObservable();
  readonly categories$: Observable<SfTaxonomy[]> = this._categories$.asObservable();
  readonly subCategories$: Observable<SfTaxonomy[]> = this._subCategories$.asObservable();

  get brands(): SfTaxonomy[] {
    return this._brands$.getValue();
  }

  set brands(brands: SfTaxonomy[]) {
    this._brands$.next(brands.map(brand => new SfTaxonomyModel(brand)));
  }

  get category(): SfTaxonomy {
    return this._category$.getValue();
  }

  set category(category: SfTaxonomy) {
    this._category$.next(new SfTaxonomyModel(category));
  }

  get categories(): SfTaxonomy[] {
    return this._categories$.getValue();
  }

  set categories(categories: SfTaxonomy[]) {
    this._categories$.next(categories.map(category => new SfTaxonomyModel(category)));
  }

  get subCategories(): SfTaxonomy[] {
    return this._subCategories$.getValue();
  }

  set subCategories(subCategories: SfTaxonomy[]) {
    this._subCategories$.next(subCategories.map(subCategory => new SfTaxonomyModel(subCategory)));
  }
}
