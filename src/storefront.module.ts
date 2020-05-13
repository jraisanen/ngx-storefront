import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducers } from './reducers';
import { SfEnvironment } from './types';

@NgModule({
  imports: [StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)],
})
export class SfStorefrontModule {
  static forRoot(environment: SfEnvironment): ModuleWithProviders {
    return {
      ngModule: SfStorefrontModule,
      providers: [{ provide: 'env', useValue: environment }],
    };
  }
}
