import { TestBed, inject } from '@angular/core/testing';

import { RegitrationServiceService } from './regitration-service.service';

describe('RegitrationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegitrationServiceService]
    });
  });

  it('should be created', inject([RegitrationServiceService], (service: RegitrationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
