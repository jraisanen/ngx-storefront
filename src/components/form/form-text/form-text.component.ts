import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sf-form-text',
  styleUrls: ['./form-text.component.scss'],
  templateUrl: './form-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfFormTextComponent {
  @Input() error: string | undefined;
  @Input() key: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() value: string | undefined;
  @Output() onValueChange: EventEmitter<string | undefined> = new EventEmitter<string | undefined>();
}
