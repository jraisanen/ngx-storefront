import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Page } from '../../types/page';

@Component({
  selector: 'sf-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfPageComponent {
  @Input() readonly page: Page;
}
