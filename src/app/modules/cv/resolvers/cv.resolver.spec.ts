import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvResolver } from './cv.resolver';

describe('cvResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cvResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
