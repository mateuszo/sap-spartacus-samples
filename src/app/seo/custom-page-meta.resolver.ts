import { Injectable } from '@angular/core';
import { PageMetaResolver, PageMeta, ContentPageMetaResolver, PageDescriptionResolver } from '@spartacus/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPageMetaResolver extends ContentPageMetaResolver implements PageDescriptionResolver {
  resolveDescription(): Observable<string> {
    return of('content page');
  }

}
