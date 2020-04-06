import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SfNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [SfNotFoundComponent],
  exports: [SfNotFoundComponent],
  imports: [RouterModule],
})
export class SfNotFoundModule {}
