import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageMetaResolver } from '@spartacus/core';
import { CustomPageMetaResolver } from './custom-page-meta.resolver';
import { JsonLdBuilderModule, JsonLdBaseProductBuilder } from '@spartacus/storefront';
import { CustomJsonLdBaseProductBuilder } from './custom-product-jsonld.builder';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JsonLdBuilderModule
  ],
  providers: [
    {
      provide: ContentPageMetaResolver,
      useClass: CustomPageMetaResolver,
    },
    {
      provide: JsonLdBaseProductBuilder,
      useClass: CustomJsonLdBaseProductBuilder
    }
  ]
})
export class SeoModule { }
