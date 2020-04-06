import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sf-column',
  styleUrls: ['./column.component.scss'],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfColumnComponent {}
