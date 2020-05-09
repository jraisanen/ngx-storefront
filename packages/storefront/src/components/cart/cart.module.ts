import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentModule } from '@jraisanen/ngx-elements';
import { LayoutModule } from '@jraisanen/ngx-layout';
import { SfCartItemsComponent } from './cart-items/cart-items.component';
import { SfCartSummaryComponent } from './cart-summary/cart-summary.component';
import { SfCartComponent } from './cart.component';

@NgModule({
  declarations: [SfCartComponent, SfCartItemsComponent, SfCartSummaryComponent],
  exports: [SfCartComponent, SfCartItemsComponent, SfCartSummaryComponent],
  imports: [CommonModule, RouterModule, ContentModule, LayoutModule],
})
export class SfCartModule {}
