import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfImageService } from '../../services/image.service';

@Component({
  selector: 'sf-banner',
  styleUrls: ['./banner.component.scss'],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfBannerComponent {
  @Input() image: string | undefined;

  constructor(
    readonly imageService: SfImageService,
  ) {}
}
