import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Image } from '../../../models/image.model';

@Component({
  selector: 'sf-image',
  styleUrls: ['./image.component.scss'],
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfImageComponent {
  @Input() readonly image = {} as Image;

  imageLoader = true;
}
