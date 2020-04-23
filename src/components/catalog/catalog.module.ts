import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SfCatalogActiveFiltersComponent } from './catalog-active-filters/catalog-active-filters.component';
import { SfCatalogFiltersComponent } from './catalog-filters/catalog-filters.component';
import { SfCatalogSidebarComponent } from './catalog-sidebar/catalog-sidebar.component';

@NgModule({
  declarations: [SfCatalogActiveFiltersComponent, SfCatalogFiltersComponent, SfCatalogSidebarComponent],
  exports: [SfCatalogActiveFiltersComponent, SfCatalogFiltersComponent, SfCatalogSidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SfCatalogModule {}
