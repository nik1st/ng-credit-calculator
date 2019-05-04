import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbPaymentsComponent } from './db-payments.component';

describe('DbPaymentsComponent', () => {
  let component: DbPaymentsComponent;
  let fixture: ComponentFixture<DbPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
