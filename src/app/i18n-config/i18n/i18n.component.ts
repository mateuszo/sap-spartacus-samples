import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss']
})
export class I18nComponent implements OnInit {


  text$: Observable<string> = this.ts.translate('voucher.coupon');

  constructor(private ts: TranslationService) { }

  ngOnInit() {
  }

}
