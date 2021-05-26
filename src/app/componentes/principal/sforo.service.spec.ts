import { TestBed } from '@angular/core/testing';

import { SforoService } from './sforo.service';

describe('SforoService', () => {
  let service: SforoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SforoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
