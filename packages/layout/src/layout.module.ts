import { NgModule } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { ContainerComponent } from './container/container.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    ColumnComponent,
    ContainerComponent,
    GridComponent,
    GridItemComponent,
    RowComponent,
  ],
  exports: [
    ColumnComponent,
    ContainerComponent,
    GridComponent,
    GridItemComponent,
    RowComponent,
  ],
})
export class LayoutModule {}
