import { NgModule } from '@angular/core';
import { SfImageComponent } from './image/image.component';
import { SfTextComponent } from './text/text.component';
import { SfTitleComponent } from './title/title.component';

@NgModule({
  declarations: [SfImageComponent, SfTextComponent, SfTitleComponent],
  exports: [SfImageComponent, SfTextComponent, SfTitleComponent],
})
export class SfContentModule {}
