import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets/outlets.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule, OutletRefModule
  ],
  exports: [OutletsComponent]
})
export class OutletsModule { }
