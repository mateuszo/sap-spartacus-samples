import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { CustomCartComponent } from './custom-cart/custom-cart.component';



@NgModule({
  declarations: [CustomBannerComponent, CustomCartComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent
        },
        CartComponent: {
          component: CustomCartComponent
        }
      }
    } as CmsConfig)
  ],
  entryComponents: [CustomBannerComponent, CustomCartComponent]
})
export class ComponentsModule { }
