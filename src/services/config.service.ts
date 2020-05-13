import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPath } from '../constants';
import { SfConfig, SfConfigModel } from '../models';
import { SfState } from '../reducers';
import { selectConfig, selectConfigs } from '../selectors';
import { SfApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class SfConfigService {
  config$ = this.store.select(selectConfig);
  configs$ = this.store.select(selectConfigs);

  private _config = new SfConfigModel();
  private _configs: SfConfig[] = [];

  get config(): SfConfig {
    return this._config;
  }

  get configs(): SfConfig[] {
    return this._configs;
  }

  constructor(
    private readonly apiService: SfApiService,
    private readonly store: Store<SfState>,
  ) {
    this.config$.subscribe(config => this._config = config as SfConfig);
    this.configs$.subscribe(configs => this._configs = configs as SfConfig[]);
  }

  getConfigs(): Observable<SfConfig[]> {
    return this.apiService.getItems(ApiPath.Configs) as Observable<SfConfig[]>;
  }
}
