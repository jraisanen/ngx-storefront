import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { SfCustomer } from '../models';
import { SfState } from '../reducers';

export enum AuthActionType {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  Register = '[Auth] Register',
}

interface AuthParams {
  customer: SfCustomer;
}

export const AuthAction = {
  login: createAction(AuthActionType.Login, props<AuthParams>()),
  logout: createAction(AuthActionType.Logout),
  register: createAction(AuthActionType.Register, props<AuthParams>()),
};

@Injectable({ providedIn: 'root' })
export class SfAuthAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  login(params: AuthParams): void {
    this.store.dispatch(AuthAction.login(params));
  }

  logout(): void {
    this.store.dispatch(AuthAction.logout());
  }

  register(params: AuthParams): void {
    this.store.dispatch(AuthAction.register(params));
  }
}
