import { TestBed } from '@angular/core/testing';

import { EditeurService } from './editeur.service';

describe('EditeurService', () => {
  let service: EditeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
