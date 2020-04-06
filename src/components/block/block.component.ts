import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Block } from '../../types/block';

@Component({
  selector: 'sf-block',
  styleUrls: ['./block.component.scss'],
  templateUrl: './block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfBlockComponent {
  @Input() readonly block = {} as Block;
}
