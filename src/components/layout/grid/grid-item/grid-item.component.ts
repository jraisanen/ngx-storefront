import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sf-grid-item',
  styleUrls: ['./grid-item.component.scss'],
  templateUrl: './grid-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfGridItemComponent {}
