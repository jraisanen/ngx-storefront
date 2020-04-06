import { ModuleWithProviders, NgModule } from '@angular/core';
import { Environment } from './types/environment';

@NgModule()
export class SfStorefrontModule {
  static forRoot(environment: Environment): ModuleWithProviders {
    return {
      ngModule: SfStorefrontModule,
      providers: [{ provide: 'env', useValue: environment }],
    };
  }
}
