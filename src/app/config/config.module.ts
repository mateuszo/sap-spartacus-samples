import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config, ConfigModule, CmsConfig } from '@spartacus/core';
import { ConfigDisplayComponent } from './config-display/config-display.component';
import { ThemeConfig } from './theme.config';




function configFactory() {
  return { buildTime: Date.now() };
}

@NgModule({
  declarations: [ConfigDisplayComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      anything: 'Theme.STRAWBERRIES'
    }),
    ConfigModule.withConfigFactory(configFactory)
  ],
  exports: [ConfigDisplayComponent],
})
export class CustomConfigModule { }
