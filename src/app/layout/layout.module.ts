import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig, PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { MyPageLayoutHandler } from './my-page-layout-handler';



@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig(
      {
        layoutSlots: {
          header: {
            md: {
              slots: [
                'PreHeader',
                'SiteLogo',
                'SearchBox',
                'SiteLogin',
                'MiniCart',
                'NavigationBar',
              ]
            }
          },
          footer: {
            slots: [
              'SiteContext',
              'SiteLinks',
              'Footer'
            ]
          }
        }

      } as LayoutConfig)
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: MyPageLayoutHandler,
      multi: true,
    },
  ]
})
export class LayoutModule { }
