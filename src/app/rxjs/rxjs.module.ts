import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartQuantityComponent } from './product-cart-quantity/product-cart-quantity.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [ProductCartQuantityComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [ProductCartQuantityComponent],
})
export class RxjsModule { }
