import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { item } from '@jraisanen/ngx-core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthActionType, ItemAction, SfCustomerAction } from '../actions';
import { SfCustomerModel } from '../models';
import { SfAuthService, SfStorageService } from '../services';

@Injectable()
export class AuthEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: SfAuthService,
    private readonly customerAction: SfCustomerAction,
    private readonly router: Router,
    private readonly storageService: SfStorageService,
  ) {}

  @Effect() login$ = (): Observable<Action> => this.actions$.pipe(
    ofType(AuthActionType.Login),
    tap(({ customer }) => this.authService.login(customer).pipe(
      map(accessToken => {
        if (accessToken && typeof accessToken === 'string') {
          this.storageService.accessToken = accessToken;
          this.customerAction.getCustomer();
        }
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() logout$ = (): Observable<Action> => this.actions$.pipe(
    ofType(AuthActionType.Logout),
    mergeMap(() => this.authService.logout().pipe(
      map(hasLoggedOut => {
        if (hasLoggedOut) {
          this.storageService.accessToken = '';
          this.router.navigate(['/'], { replaceUrl: true });
        }
        return ItemAction.getSuccess({ customer: new SfCustomerModel() });
      }),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() register$ = (): Observable<Action> => this.actions$.pipe(
    ofType(AuthActionType.Register),
    mergeMap(({ customer }) => this.authService.register(customer).pipe(
      map(customer => item(customer)),
      map(customer => ItemAction.getSuccess({ customer })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
