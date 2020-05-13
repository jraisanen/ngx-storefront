import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfTaxonomy } from '../../../models';
import { SfFilterService } from '../../../services';

@Component({
  selector: 'sf-catalog-filters',
  styleUrls: ['./catalog-filters.component.scss'],
  templateUrl: './catalog-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCatalogFiltersComponent {
  @Input() readonly activeFilters: SfTaxonomy[] = [];
  @Input() readonly filters: SfTaxonomy[] = [];
  @Input() readonly isExternal: boolean = false;
  @Input() readonly label: string = '';

  isFilterToggleActive = true;

  constructor(
    readonly filterService: SfFilterService,
  ) {}
}
