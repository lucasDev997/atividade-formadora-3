import { TestBed } from '@angular/core/testing';

import { GetCepServiceService } from './get-cep-service.service';

describe('GetCepServiceService', () => {
  let service: GetCepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
