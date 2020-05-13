import { Injectable } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { SfState } from '../reducers';

export enum ConfigActionType {
  GetConfig = '[Config] Get Config',
  GetConfigs = '[Config] Get Configs',
}

export const ConfigAction = {
  getConfig: createAction(ConfigActionType.GetConfig),
  getConfigs: createAction(ConfigActionType.GetConfigs),
}

@Injectable({ providedIn: 'root' })
export class SfConfigAction {
  constructor(
    private readonly store: Store<SfState>,
  ) {}

  getConfig(): void {
    this.store.dispatch(ConfigAction.getConfig());
  }

  getConfigs(): void {
    this.store.dispatch(ConfigAction.getConfigs());
  }
}
