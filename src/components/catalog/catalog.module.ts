import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SfCatalogSidebarComponent } from './catalog-sidebar/catalog-sidebar.component';

@NgModule({
  declarations: [SfCatalogSidebarComponent],
  exports: [SfCatalogSidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SfCatalogModule {}
