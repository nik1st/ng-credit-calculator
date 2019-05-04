import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBCreditsComponent } from './db-credits.component';

describe('DBCreditsComponent', () => {
  let component: DBCreditsComponent;
  let fixture: ComponentFixture<DBCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
