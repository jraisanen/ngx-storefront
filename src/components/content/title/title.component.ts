import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sf-title',
  styleUrls: ['./title.component.scss'],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfTitleComponent {}
