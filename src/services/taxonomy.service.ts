import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPath } from '../constants';
import { SfTaxonomy, SfTaxonomyModel } from '../models';
import { SfState } from '../reducers';
import { selectBrands, selectCategories, selectCategory, selectSubCategories } from '../selectors';
import { SfApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SfTaxonomyService {
  brands$ = this.store.select(selectBrands);
  categories$ = this.store.select(selectCategories);
  category$ = this.store.select(selectCategory);
  subCategories$ = this.store.select(selectSubCategories);

  private _brands: SfTaxonomy[] = [];
  private _categories: SfTaxonomy[] = [];
  private _category = new SfTaxonomyModel();
  private _subCategories: SfTaxonomy[] = [];

  get brands(): SfTaxonomy[] {
    return this._brands;
  }

  get categories(): SfTaxonomy[] {
    return this._categories;
  }

  get category(): SfTaxonomy {
    return this._category;
  }

  get subCategories(): SfTaxonomy[] {
    return this._subCategories;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly store: Store<SfState>,
  ) {
    this.brands$.subscribe(brands => this._brands = brands as SfTaxonomy[]);
    this.categories$.subscribe(categories => this._categories = categories as SfTaxonomy[]);
    this.category$.subscribe(category => this._category = category as SfTaxonomy);
    this.subCategories$.subscribe(subCategories => this._subCategories = subCategories as SfTaxonomy[]);
  }

  getBrands(params: Params): Observable<SfTaxonomy[]> {
    return this.apiService.getItems(ApiPath.Brands, params) as Observable<SfTaxonomy[]>;
  }

  getCategories(params: Params): Observable<SfTaxonomy[]> {
    return this.apiService.getItems(ApiPath.Categories, params) as Observable<SfTaxonomy[]>;
  }

  getCategory(category: Partial<SfTaxonomy>): Observable<SfTaxonomy> {
    return this.apiService.getItem(`${ApiPath.Categories}/${category.id}`) as Observable<SfTaxonomy>;
  }

  findCategory(categories: SfTaxonomy[], { routeParams }: Params): SfTaxonomy {
    let category: SfTaxonomy = new SfTaxonomyModel();

    Object.values(routeParams).forEach((param, index) => {
      let cs = categories;
      if (index) {
        cs = cs.filter(c => category.id === c.parent);
      }
      category = cs.find(c => c.key === param) || category;
    });

    return category;
  }
}
