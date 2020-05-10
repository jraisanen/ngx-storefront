import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfProductModel } from '../../models/product.model';
import { SfImageService } from '../../services/image.service';

@Component({
  selector: 'sf-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfProductComponent {
  @Input() readonly product = new SfProductModel();

  constructor(
    readonly imageService: SfImageService,
  ) {}
}
