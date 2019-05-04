import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCalcComponent } from './credit-calc.component';

describe('CreditCalcComponent', () => {
  let component: CreditCalcComponent;
  let fixture: ComponentFixture<CreditCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
