import { TestBed } from '@angular/core/testing';

import { CustomPageMetaResolverService } from './custom-page-meta-resolver.service';

describe('CustomPageMetaResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPageMetaResolverService = TestBed.get(CustomPageMetaResolverService);
    expect(service).toBeTruthy();
  });
});
