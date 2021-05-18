import { TestBed } from '@angular/core/testing';

import { SconsultaService } from './sconsulta.service';

describe('SconsultaService', () => {
  let service: SconsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SconsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
