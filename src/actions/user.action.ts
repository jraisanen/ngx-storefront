import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/api';
import { SfApiService } from '../services/api.service';
import { SfMetaService } from '../services/meta.service';
import { SfUserStore } from '../stores/user.store';
import { User } from '../types/user';

@Injectable({ providedIn: 'root' })
export class SfUserAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly metaService: SfMetaService,
    private readonly userStore: SfUserStore,
  ) {}

  fetchUser(): Promise<User> {
    const request = this.apiService.getItem(ApiPath.UsersMe) as Promise<User>;

    Promise.resolve(request)
      .then(user => this.userStore.user = user)
      .catch(e => console.debug(e));

    return request;
  }
}
