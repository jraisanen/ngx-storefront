import { Injectable } from '@angular/core';
import { item } from '@jraisanen/ngx-core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ConfigActionType, ItemAction } from '../actions';
import { SfConfigModel } from '../models';
import { SfConfigService } from '../services';

@Injectable()
export class ConfigEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly configService: SfConfigService,
  ) {}

  @Effect() getConfig$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ConfigActionType.GetConfig),
    mergeMap(() => this.configService.getConfigs().pipe(
      map(config => new SfConfigModel(item(config))),
      map(config => ItemAction.getSuccess({ config })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );

  @Effect() getConfigs$ = (): Observable<Action> => this.actions$.pipe(
    ofType(ConfigActionType.GetConfigs),
    mergeMap(() => this.configService.getConfigs().pipe(
      map(configs => configs.map(config => new SfConfigModel(config))),
      map(configs => ItemAction.getSuccess({ configs })),
      catchError(error => of(ItemAction.getError({ error }))),
    )),
  );
}
