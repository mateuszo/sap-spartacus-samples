import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { OutletsModule } from './outlets/outlets.module';
import { ComponentsModule } from './components/components.module';
import { CustomConfigModule } from './config/config.module';
import { LayoutModule } from './layout/layout.module';
import { ConfigModule, I18nConfig } from '@spartacus/core';
import { I18nConfigModule } from './i18n-config/i18n-config.module';
import { ServicesModule } from './services/services.module';
import { SeoModule } from './seo/seo.module';
import { RxjsModule } from './rxjs/rxjs.module';

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
        baseSite: ['electronics-spa'],
        urlParameters: ['language']
      },
      features: {
        level: '1.3',
        anonymousConsents: true
      }
    }),

    // OutletsModule,
    // ComponentsModule,
    // CustomConfigModule,
    // LayoutModule,
    I18nConfigModule,
    // ServicesModule,
    // SeoModule
    RxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
