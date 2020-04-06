import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SfContentModule } from '../content/content.module';
import { SfPageComponent } from './page.component';

@NgModule({
  declarations: [SfPageComponent],
  exports: [SfPageComponent],
  imports: [CommonModule, RouterModule, SfContentModule],
})
export class SfPageModule {}
