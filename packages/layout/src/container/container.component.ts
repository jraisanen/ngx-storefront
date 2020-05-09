import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-container',
  styleUrls: ['./container.component.scss'],
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {}
