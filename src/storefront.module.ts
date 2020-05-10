import { ModuleWithProviders, NgModule } from '@angular/core';
import { SfEnvironment } from './types/environment';

@NgModule()
export class SfStorefrontModule {
  static forRoot(environment: SfEnvironment): ModuleWithProviders {
    return {
      ngModule: SfStorefrontModule,
      providers: [{ provide: 'env', useValue: environment }],
    };
  }
}
