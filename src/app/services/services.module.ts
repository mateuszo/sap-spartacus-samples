import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { CustomSearchboxComponentService } from './custom-searchbox-component.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: SearchBoxComponentService, useClass: CustomSearchboxComponentService}
  ]
})
export class ServicesModule { }
