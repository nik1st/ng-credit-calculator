import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcHisComponent } from './calc-his.component';

describe('CalcHisComponent', () => {
  let component: CalcHisComponent;
  let fixture: ComponentFixture<CalcHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
