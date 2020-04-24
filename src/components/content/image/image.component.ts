import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sf-image',
  styleUrls: ['./image.component.scss'],
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfImageComponent {
  @Input() readonly image;

  imageLoader = true;
}
