import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Environment } from '../../types/environment';

@Component({
  selector: 'sf-banner',
  styleUrls: ['./banner.component.scss'],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfBannerComponent {
  @Input() image: string | undefined;

  constructor(
    @Inject('env') readonly env: Environment,
  ) {}
}
