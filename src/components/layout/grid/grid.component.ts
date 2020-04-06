import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sf-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfGridComponent {}
