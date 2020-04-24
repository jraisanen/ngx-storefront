import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Taxonomy } from '../../../models/taxonomy.model';
import { SfFilterService } from '../../../services/filter.service';

@Component({
  selector: 'sf-catalog-active-filters',
  styleUrls: ['./catalog-active-filters.component.scss'],
  templateUrl: './catalog-active-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCatalogActiveFiltersComponent {
  @Input() readonly filters: Taxonomy[] = [];

  constructor(
    readonly filterService: SfFilterService,
  ) {}
}
