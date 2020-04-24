import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Page } from '../../models/page.model';

@Component({
  selector: 'sf-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfPageComponent {
  @Input() readonly page: Page;
}
