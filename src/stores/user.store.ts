import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({ providedIn: 'root' })
export class SfUserStore {
  private readonly _user$: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

  readonly user$: Observable<User> = this._user$.asObservable();

  get user(): User {
    return this._user$.getValue();
  }

  set user(user: User) {
    this._user$.next(user);
  }
}
