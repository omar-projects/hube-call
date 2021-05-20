import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatDeRechercheComponent } from './resultat-de-recherche.component';

describe('ResultatDeRechercheComponent', () => {
  let component: ResultatDeRechercheComponent;
  let fixture: ComponentFixture<ResultatDeRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatDeRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
