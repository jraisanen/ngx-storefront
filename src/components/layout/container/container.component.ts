import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sf-container',
  styleUrls: ['./container.component.scss'],
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfContainerComponent {}
