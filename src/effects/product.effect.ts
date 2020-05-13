import { Injectable } from '@angular/core';
import { item } from '@jraisanen/ngx-core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ItemAction, ProductActionType } from '../actions';
import { SfProductModel } from '../models';
import { SfProductService } from '../services';

@Injectable()
export class ProductEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: SfProductService,
  ) {}

  @Effect() getProduct$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ProductActionType.GetProduct),
    mergeMap(({ product }) => this.productService.getProduct(product).pipe(
      map(product => new SfProductModel(item(product))),
      map(product => ItemAction.getSuccess({ product })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getProducts$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ProductActionType.GetProducts),
    mergeMap(({ params }) => this.productService.getProducts(params).pipe(
      map(products => products.map(product => new SfProductModel(product))),
      map(products => ItemAction.getSuccess({ products })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
