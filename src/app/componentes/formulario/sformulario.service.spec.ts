import { TestBed } from '@angular/core/testing';

import { SformularioService } from './sformulario.service';

describe('SformularioService', () => {
  let service: SformularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SformularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
