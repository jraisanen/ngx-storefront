import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sf-text',
  styleUrls: ['./text.component.scss'],
  templateUrl: './text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfTextComponent {
  @Input() readonly text = '';
}
