import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SfConfig, SfConfigModel } from '../models/config.model';

@Injectable({ providedIn: 'root' })
export class SfConfigStore {
  private readonly _config$: BehaviorSubject<SfConfig> = new BehaviorSubject<SfConfig>(new SfConfigModel());
  private readonly _configs$: BehaviorSubject<SfConfig[]> = new BehaviorSubject<SfConfig[]>([]);

  readonly config$: Observable<SfConfig> = this._config$.asObservable();
  readonly configs$: Observable<SfConfig[]> = this._configs$.asObservable();

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
