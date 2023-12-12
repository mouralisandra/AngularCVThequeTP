import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cvGuardGuard } from './cv.guard';

describe('cvGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => cvGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
