import { TestBed } from '@angular/core/testing';

import { ConversorDivisasService } from './conversor-divisas.service';

describe('ConversorDivisasService', () => {
  let service: ConversorDivisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorDivisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
