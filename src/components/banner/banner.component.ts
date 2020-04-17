import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfConfigStore } from '../../stores/config.store';

@Component({
  selector: 'sf-banner',
  styleUrls: ['./banner.component.scss'],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfBannerComponent {
  @Input() image: string | undefined;

  constructor(
    readonly configStore: SfConfigStore,
  ) {}
}
