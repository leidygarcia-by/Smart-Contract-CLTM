import { TestBed } from '@angular/core/testing';

import { SrformforoService } from './srformforo.service';

describe('SrformforoService', () => {
  let service: SrformforoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrformforoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
