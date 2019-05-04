import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPadComponent } from './button-pad.component';

describe('ButtonPadComponent', () => {
  let component: ButtonPadComponent;
  let fixture: ComponentFixture<ButtonPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
