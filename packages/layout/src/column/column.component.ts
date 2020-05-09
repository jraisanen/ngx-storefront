import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-column',
  styleUrls: ['./column.component.scss'],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {}
