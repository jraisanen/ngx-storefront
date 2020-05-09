import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from './form-select.types';

@Component({
  selector: 'ngx-form-select',
  styleUrls: ['./form-select.component.scss'],
  templateUrl: './form-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSelectComponent {
  @Input() label: string;
  @Input() options: Option[];
  @Input() selectedOption: Option;

  @Output() onChange = new EventEmitter();

  isSelectActive = false;

  onSelect(option: Option): void {
    this.isSelectActive = false;
    this.selectedOption = option;
    this.onChange.emit(option);
  }
}
