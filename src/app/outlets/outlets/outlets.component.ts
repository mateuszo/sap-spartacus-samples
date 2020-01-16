import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Product, CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss']
})
export class OutletsComponent implements OnInit {

  product$: Observable<Product> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService, private cmsService: CmsService) { }

  ngOnInit() {
  }

  print(uid: string) {
    console.log(uid);
    return this.cmsService.getComponentData(uid);
  }

}
