import { Injectable } from '@angular/core';
import { item } from '@jraisanen/ngx-core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ItemAction, TaxonomyActionType } from '../actions';
import { SfTaxonomyModel } from '../models';
import { SfTaxonomyService } from '../services';

@Injectable()
export class TaxonomyEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly taxonomyService: SfTaxonomyService,
  ) {}

  @Effect() getBrands$ = (): Observable<Action> => this.actions$.pipe(
    ofType(TaxonomyActionType.GetBrands),
    mergeMap(({ params }) => this.taxonomyService.getBrands(params).pipe(
      map(brands => brands.map(brand => new SfTaxonomyModel(brand))),
      map(brands => ItemAction.getSuccess({ brands })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getCategories$ = (): Observable<Action> => this.actions$.pipe(
    ofType(TaxonomyActionType.GetCategories),
    mergeMap(({ params }) => this.taxonomyService.getCategories(params).pipe(
      map(categories => categories.map(category => new SfTaxonomyModel(category))),
      map(categories => ItemAction.getSuccess({ categories })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getCategory$ = (): Observable<Action> => this.actions$.pipe(
    ofType(TaxonomyActionType.GetCategory),
    mergeMap(({ category }) => this.taxonomyService.getCategory(category).pipe(
      map(category => new SfTaxonomyModel(item(category))),
      map(category => ItemAction.getSuccess({ category })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
