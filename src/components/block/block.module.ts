import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SfBlockComponent } from './block.component';

@NgModule({
  declarations: [SfBlockComponent],
  exports: [SfBlockComponent],
  imports: [RouterModule],
})
export class SfBlockModule {}
