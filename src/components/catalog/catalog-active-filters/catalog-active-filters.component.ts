import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfTaxonomy } from '../../../models';
import { SfFilterService } from '../../../services';

@Component({
  selector: 'sf-catalog-active-filters',
  styleUrls: ['./catalog-active-filters.component.scss'],
  templateUrl: './catalog-active-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCatalogActiveFiltersComponent {
  @Input() readonly filters: SfTaxonomy[] = [];

  constructor(
    readonly filterService: SfFilterService,
  ) {}
}
