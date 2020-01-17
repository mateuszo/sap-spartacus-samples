import { PageLayoutHandler, BREAKPOINT } from '@spartacus/storefront';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RoutingService, LanguageService } from '@spartacus/core';

@Injectable({ providedIn: 'root' })
export class MyPageLayoutHandler implements PageLayoutHandler {

    constructor(private langSer: LanguageService) { }

    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string, breakpoint?: BREAKPOINT): Observable<string[]> {
        return combineLatest([slots$, this.langSer.getActive()]).pipe(
            map(([slots, lang]) => {
                if (lang === 'de') {
                    return slots.filter(slot => slot !== 'SiteLogo');
                }
                return slots;
            })
        );
    }

}