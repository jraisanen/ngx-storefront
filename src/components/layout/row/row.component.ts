import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sf-row',
  styleUrls: ['./row.component.scss'],
  templateUrl: './row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfRowComponent {}
