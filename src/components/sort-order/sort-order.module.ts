import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SfSortOrderComponent } from './sort-order.component';

@NgModule({
  declarations: [SfSortOrderComponent],
  exports: [SfSortOrderComponent],
  imports: [CommonModule],
})
export class SfSortOrderModule {}
