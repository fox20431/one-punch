import { TestBed } from '@angular/core/testing';

import { GlovesService } from './gloves.service';

describe('GlovesService', () => {
  let service: GlovesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlovesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
