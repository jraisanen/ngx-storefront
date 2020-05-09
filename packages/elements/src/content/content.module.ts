import { NgModule } from '@angular/core';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [BackgroundImageComponent, ImageComponent],
  exports: [BackgroundImageComponent, ImageComponent],
})
export class ContentModule {}

export * from './image/image.model';
