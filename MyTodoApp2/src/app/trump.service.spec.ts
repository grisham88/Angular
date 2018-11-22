import { TestBed } from '@angular/core/testing';

import { TrumpService } from './trump.service';

describe('TrumpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrumpService = TestBed.get(TrumpService);
    expect(service).toBeTruthy();
  });
});
