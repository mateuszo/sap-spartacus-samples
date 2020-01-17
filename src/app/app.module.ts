import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { OutletsModule } from './outlets/outlets.module';
import { ComponentsModule } from './components/components.module';
import { CustomConfigModule } from './config/config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com/',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.3',
        anonymousConsents: true
      }
    }),

    // OutletsModule,
    // ComponentsModule,
    // CustomConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
