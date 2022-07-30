import { TestBed } from '@angular/core/testing';

import { ServicioNuevoService } from './servicio-nuevo.service';

describe('ServicioNuevoService', () => {
  let service: ServicioNuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
