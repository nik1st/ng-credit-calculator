import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcConverterComponent } from './calc-converter.component';

describe('CalcConverterComponent', () => {
  let component: CalcConverterComponent;
  let fixture: ComponentFixture<CalcConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
