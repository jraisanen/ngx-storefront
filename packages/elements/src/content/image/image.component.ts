import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'ngx-image',
  styleUrls: ['./image.component.scss'],
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() readonly image: Image;

  imageLoader = true;
}
