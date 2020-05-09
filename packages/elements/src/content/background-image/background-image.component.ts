import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-background-image',
  styleUrls: ['./background-image.component.scss'],
  templateUrl: './background-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundImageComponent {
  @Input() imageUrl: string;
}
