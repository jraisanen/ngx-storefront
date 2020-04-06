import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SfUserAction } from '../actions/user.action';
import { ApiPath } from '../constants/api';
import { AccessToken } from '../types/token';
import { User } from '../types/user';
import { SfApiService } from './api.service';
import { SfStorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class SfAuthService {
  constructor(
    private readonly apiService: SfApiService,
    private readonly router: Router,
    private readonly storageService: SfStorageService,
    private readonly userAction: SfUserAction,
  ) {}

  async login(user: Partial<User>): Promise<AccessToken> {
    const params = { username: user.email, password: user.password };
    const data = (await this.apiService.postItem(ApiPath.UsersLogin, params)) as AccessToken;
    if (data.access_token) {
      this.storageService.accessToken = data.access_token;
      Promise.resolve(this.userAction.fetchUser())
        .catch(e => console.debug(e));
    }
    return data;
  }

  async logout(): Promise<boolean> {
    const hasLoggedOut = (await this.apiService.postItem(ApiPath.UsersLogout, {})) as boolean;
    if (hasLoggedOut) {
      this.storageService.accessToken = '';
      await this.router.navigate(['/']);
    }
    return hasLoggedOut;
  }

  async register(user: Partial<User>): Promise<User> {
    return (await this.apiService.postItem(ApiPath.UsersRegister, user)) as User;
  }
}
