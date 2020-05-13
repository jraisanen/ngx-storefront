import { Injectable } from '@angular/core';
import { item } from '@jraisanen/ngx-core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CustomerActionType, ItemAction } from '../actions';
import { SfCustomerModel } from '../models';
import { SfCustomerService, SfStorageService } from '../services';

@Injectable()
export class CustomerEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly customerService: SfCustomerService,
    private readonly storageService: SfStorageService,
  ) {}

  @Effect() getCustomer$ = (): Observable<Action> => this.actions$.pipe(
    ofType(CustomerActionType.GetCustomer),
    mergeMap(() => this.customerService.getCustomer().pipe(
      map(customer => new SfCustomerModel(item(customer))),
      map(customer => {
        if (!customer.id) {
          this.storageService.accessToken = '';
        }
        return ItemAction.getSuccess({ customer });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
