import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { item } from '@jraisanen/ngx-core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ItemAction, SfProductAction, SfTaxonomyAction, ViewActionType } from '../actions';
import { META, Pagination, SORT_ORDER_MENU_ITEMS } from '../constants';
import { SfCartModel, SfCustomerModel, SfProductModel, SfTaxonomyModel } from '../models';
import { SfCartService, SfCustomerService, SfMetaService, SfProductService, SfTaxonomyService } from '../services';

@Injectable()
export class ViewEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly cartService: SfCartService,
    private readonly customerService: SfCustomerService,
    private readonly metaService: SfMetaService,
    private readonly productAction: SfProductAction,
    private readonly productService: SfProductService,
    private readonly taxonomyAction: SfTaxonomyAction,
    private readonly taxonomyService: SfTaxonomyService,
  ) {}

  @Effect() getAccountView$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ViewActionType.GetAccountView),
    mergeMap(() => this.customerService.getCustomer().pipe(
      map(customer => new SfCustomerModel(item(customer))),
      map(customer => {
        this.metaService.data = META.account;
        return ItemAction.getSuccess({ customer });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getCartView$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ViewActionType.GetCartView),
    mergeMap(() => this.cartService.getCart().pipe(
      map(cart => new SfCartModel(item(cart))),
      map(cart => {
        this.metaService.data = META.cart;
        return ItemAction.getSuccess({ cart });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getCatalogView$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ViewActionType.GetCatalogView),
    mergeMap(({ params, routeParams }) => this.taxonomyService.getCategories(params).pipe(
      map(categories => categories.map(category => new SfTaxonomyModel(category))),
      map(categories => {
        if (!categories.length) {
          return ItemAction.getSuccess({ categories });
        }
        const category = this.taxonomyService.findCategory(categories, routeParams);
        const subCategories = categories.filter(c => category.id === c.parent);

        const productsParams = {
          category: category.id,
          limit: Pagination.Limit,
          sortBy: SORT_ORDER_MENU_ITEMS[0].sortBy,
          sortOrder: SORT_ORDER_MENU_ITEMS[0].sortOrder,
        };

        this.productAction.getProducts({ params: productsParams });
        this.taxonomyAction.getBrands({ params: { category: category.id } });

        this.metaService.data = category.id ? {
          title: category.name,
          description: category.description,
          url: category.key,
        } : META.not_found;

        return ItemAction.getSuccess({ categories, category, subCategories });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getCheckoutView$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ViewActionType.GetCheckoutView),
    mergeMap(() => this.cartService.getCart().pipe(
      map(cart => new SfCartModel(item(cart))),
      map(cart => {
        this.metaService.data = META.checkout;
        return ItemAction.getSuccess({ cart });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getProductView$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ViewActionType.GetProductView),
    mergeMap(({ product }) => this.productService.getProduct(product).pipe(
      map(product => new SfProductModel(item(product))),
      map(product => {
        this.metaService.data = product.id ? {
          description: product.name,
          title: product.name,
          url: `product/${product.key}`,
        } : META.not_found;
        return ItemAction.getSuccess({ product });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
