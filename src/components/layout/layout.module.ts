import { NgModule } from '@angular/core';
import { SfColumnComponent } from './column/column.component';
import { SfContainerComponent } from './container/container.component';
import { SfGridComponent } from './grid/grid.component';
import { SfGridItemComponent } from './grid/grid-item/grid-item.component';
import { SfRowComponent } from './row/row.component';

@NgModule({
  declarations: [
    SfColumnComponent,
    SfContainerComponent,
    SfGridComponent,
    SfGridItemComponent,
    SfRowComponent,
  ],
  exports: [
    SfColumnComponent,
    SfContainerComponent,
    SfGridComponent,
    SfGridItemComponent,
    SfRowComponent,
  ],
})
export class SfLayoutModule {}
