import { Injectable } from '@angular/core';
import { ApiPath } from '../constants/api';
import { Config } from '../models/config.model';
import { SfApiService } from '../services/api.service';
import { SfConfigStore } from '../stores/config.store';

@Injectable({ providedIn: 'root' })
export class SfConfigAction {
  constructor(
    private readonly apiService: SfApiService,
    private readonly configStore: SfConfigStore,
  ) {}

  fetchConfigs(): Promise<Config[]> {
    const request = this.apiService.getItems(ApiPath.Configs) as Promise<Config[]>;

    Promise.resolve(request)
      .then(configs => this.configStore.configs = configs)
      .catch(e => console.debug(e));

    return request;
  }
}
