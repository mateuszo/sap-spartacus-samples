import { Injectable } from '@angular/core';
import { JsonLdBuilder } from '@spartacus/storefront';
import { Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class CustomJsonLdBaseProductBuilder implements JsonLdBuilder<Product> {
    build(data: Product): Observable<{}> {
        return of({name: 'hardcoded name'});
    }

  }