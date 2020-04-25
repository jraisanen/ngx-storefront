import { NgModule } from '@angular/core';
import { SfLayoutModule } from '../layout/layout.module';
import { SfModalComponent } from './modal.component';

@NgModule({
  declarations: [SfModalComponent],
  exports: [SfModalComponent],
  imports: [SfLayoutModule],
})
export class SfModalModule {}
