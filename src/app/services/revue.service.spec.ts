import { TestBed } from '@angular/core/testing';

import { RevueService } from './revue.service';

describe('RevueService', () => {
  let service: RevueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
