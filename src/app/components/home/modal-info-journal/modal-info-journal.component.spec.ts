import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoJournalComponent } from './modal-info-journal.component';

describe('ModalInfoJournalComponent', () => {
  let component: ModalInfoJournalComponent;
  let fixture: ComponentFixture<ModalInfoJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
