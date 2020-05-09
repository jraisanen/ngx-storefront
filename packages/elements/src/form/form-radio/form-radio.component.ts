import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-form-radio',
  styleUrls: ['./form-radio.component.scss'],
  templateUrl: './form-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRadioComponent {
  @Input() error: string | undefined;
  @Input() key: string | undefined;
  @Input() label: string | undefined;
  @Input() name: string | undefined;
}
