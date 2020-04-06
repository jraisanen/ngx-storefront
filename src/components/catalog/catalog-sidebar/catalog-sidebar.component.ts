import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SfFilterService } from '../../../services/filter.service';
import { SfTaxonomyStore } from '../../../stores/taxonomy.store';
import { Taxonomy } from '../../../types/taxonomy';

@Component({
  selector: 'sf-catalog-sidebar',
  styleUrls: ['./catalog-sidebar.component.scss'],
  templateUrl: './catalog-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCatalogSidebarComponent {
  @Input() readonly subCategories: Taxonomy[] = [];

  isBrandsFilterToggleActive = true;
  isCategoriesFilterToggleActive = true;

  constructor(
    readonly filterService: SfFilterService,
    readonly taxonomyStore: SfTaxonomyStore,
  ) {}
}
