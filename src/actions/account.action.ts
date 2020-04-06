import { Injectable } from '@angular/core';
import { META } from '../constants/meta';
import { SfMetaService } from '../services/meta.service';
import { User } from '../types/user';
import { SfUserAction } from './user.action';

@Injectable({ providedIn: 'root' })
export class SfAccountAction {
  constructor(
    private readonly metaService: SfMetaService,
    private readonly userAction: SfUserAction,
  ) {}

  fetchView(): Promise<User> {
    const request = this.userAction.fetchUser() as Promise<User>;

    Promise.resolve(request)
      .then(() => this.metaService.data = META.account)
      .catch(e => console.debug(e));

    return request;
  }
}
