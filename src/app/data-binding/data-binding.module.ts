import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchAdapter, PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_NORMALIZER } from '@spartacus/core';
import { BestBuyProductSearchAdapter } from './bestbuy-search.adapter';
import { BestBuySearchPageNormalizer } from './bestbuy-search.normalizer';
import { BestButProductNormalizer } from './bestbuy-product.normalizer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ProductSearchAdapter, useClass: BestBuyProductSearchAdapter },
    { provide: PRODUCT_SEARCH_PAGE_NORMALIZER, useClass: BestBuySearchPageNormalizer, multi: true },
    { provide: PRODUCT_NORMALIZER, useClass: BestButProductNormalizer, multi: true }
  ]
})
export class DataBindingModule { }
