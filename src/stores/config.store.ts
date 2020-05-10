import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfConfig, SfConfigModel } from '../models/config.model';

@Injectable({ providedIn: 'root' })
export class SfConfigStore {
  readonly config$: Observable<SfConfig>;
  readonly configs$: Observable<SfConfig[]>;

  private readonly _config$: BehaviorSubject<SfConfig> = new BehaviorSubject<SfConfig>(new SfConfigModel());
  private readonly _configs$: BehaviorSubject<SfConfig[]> = new BehaviorSubject<SfConfig[]>([]);

  constructor() {
    this.config$ = this._config$.asObservable();
    this.configs$ = this._configs$.asObservable();
  }

  get config(): SfConfig {
    return this._config$.getValue();
  }

  set config(config: SfConfig) {
    this._config$.next(new SfConfigModel(config));
  }

  get configs(): SfConfig[] {
    return this._configs$.getValue();
  }

  set configs(configs: SfConfig[]) {
    this._configs$.next(configs.map(config => new SfConfigModel(config)));
  }
}
