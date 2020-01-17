import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nConfig, Config, I18nModule } from '@spartacus/core';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { I18nComponent } from './i18n/i18n.component';


const translationOverwrites = {
  en: { // lang
    common: { // chunk
      searchBox: { // keys (nested)
        placeholder: 'Searchin\'...'
      },
    },
  },
};

const GERMAN_TRANSLATIONS = {
  de: {
    common: {
      searchBox: {
        placeholder: 'Suchen sie hier'
      }
    }
  }
};


@NgModule({
  declarations: [I18nComponent],
  imports: [
    CommonModule,
    // ConfigModule.withConfig({
    //   i18n: {
    //     // Basic config
    //     resources: translations,
    //     chunks: translationChunksConfig,
    //     // Fallback lang
    //     fallbackLang: 'en'
    //   }
    // } as I18nConfig),


    // // Translations overwrites
    // ConfigModule.withConfig({
    //   i18n: {
    //     resources: translationOverwrites
    //   }
    // } as I18nConfig),

    // // German translations
    // ConfigModule.withConfig({
    //   i18n: {
    //     resources: GERMAN_TRANSLATIONS
    //   }
    // } as I18nConfig),

    // Import cxTranslate pipe
    I18nModule,


    // Lazy loading
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'http://localhost:4200/assets/{{lng}}/{{ns}}.json',
        },
        chunks: translationChunksConfig
      }
    } as I18nConfig)




  ],
  exports: [I18nComponent]
})
export class I18nConfigModule { }
