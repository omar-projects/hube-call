import { TestBed } from '@angular/core/testing';

import { CallForPaperService } from './call-for-paper.service';

describe('CallForPaperService', () => {
  let service: CallForPaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallForPaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
