import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from '../types/config';

@Injectable({ providedIn: 'root' })
export class SfConfigStore {
  private readonly _config$: BehaviorSubject<Config> = new BehaviorSubject<Config>({} as Config);
  private readonly _configs$: BehaviorSubject<Config[]> = new BehaviorSubject<Config[]>([]);

  readonly config$: Observable<Config> = this._config$.asObservable();
  readonly configs$: Observable<Config[]> = this._configs$.asObservable();

  get config(): Config {
    return this._config$.getValue();
  }

  set config(config: Config) {
    this._config$.next(config);
  }

  get configs(): Config[] {
    return this._configs$.getValue();
  }

  set configs(configs: Config[]) {
    this._configs$.next(configs);
  }
}
