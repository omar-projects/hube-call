import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAvanceeComponent } from './recherche-avancee.component';

describe('RechercheAvanceeComponent', () => {
  let component: RechercheAvanceeComponent;
  let fixture: ComponentFixture<RechercheAvanceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheAvanceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
