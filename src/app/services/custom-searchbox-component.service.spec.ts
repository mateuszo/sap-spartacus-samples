import { TestBed } from '@angular/core/testing';

import { CustomSearchboxComponentService } from './custom-searchbox-component.service';

describe('CustomSearchboxComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomSearchboxComponentService = TestBed.get(CustomSearchboxComponentService);
    expect(service).toBeTruthy();
  });
});
