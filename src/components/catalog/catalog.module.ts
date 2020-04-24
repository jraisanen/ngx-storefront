import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SfCatalogActiveFiltersComponent } from './catalog-active-filters/catalog-active-filters.component';
import { SfCatalogFiltersComponent } from './catalog-filters/catalog-filters.component';

@NgModule({
  declarations: [SfCatalogActiveFiltersComponent, SfCatalogFiltersComponent],
  exports: [SfCatalogActiveFiltersComponent, SfCatalogFiltersComponent],
  imports: [CommonModule, RouterModule],
})
export class SfCatalogModule {}
