import { TestBed } from '@angular/core/testing';

import { RouteGuardProductService } from './route-guard-product.service';

describe('RouteGuardProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGuardProductService = TestBed.get(RouteGuardProductService);
    expect(service).toBeTruthy();
  });
});
