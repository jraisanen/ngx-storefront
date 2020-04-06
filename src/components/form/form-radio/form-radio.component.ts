import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sf-form-radio',
  styleUrls: ['./form-radio.component.scss'],
  templateUrl: './form-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfFormRadioComponent {
  @Input() error: string | undefined;
  @Input() key: string | undefined;
  @Input() label: string | undefined;
  @Input() name: string | undefined;
}
