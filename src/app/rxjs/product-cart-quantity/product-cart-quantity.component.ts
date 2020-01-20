import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService, OrderEntry, Product } from '@spartacus/core';
import { map, take, filter, mergeAll, mergeMap, tap, startWith } from 'rxjs/operators';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-product-cart-quantity',
  templateUrl: './product-cart-quantity.component.html',
  styleUrls: ['./product-cart-quantity.component.scss']
})
export class ProductCartQuantityComponent implements OnInit {

  inCartQuantity$: Observable<number> = this.productService.getProduct().pipe(
    mergeMap((product: Product) => {
      return this.cartService.getEntries()
        .pipe(
          mergeAll(),
          filter( entry => !!entry && !!product),
          filter( (entry: OrderEntry) => entry.product.code === product.code),
          map( entry => entry.quantity)
          );
    }), startWith(0)
  );

  constructor(private cartService: CartService, private productService: CurrentProductService) { }

  ngOnInit() {
    // this.cartService.getEntries().subscribe((val) => console.log(val));
    // this.productService.getProduct().subscribe( val => console.log(val));
  }

}
