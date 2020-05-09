import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-row',
  styleUrls: ['./row.component.scss'],
  templateUrl: './row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent {}
