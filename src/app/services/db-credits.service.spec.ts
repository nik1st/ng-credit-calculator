import { TestBed } from '@angular/core/testing';

import { DbCreditsService } from './db-credits.service';

describe('DbCreditsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbCreditsService = TestBed.get(DbCreditsService);
    expect(service).toBeTruthy();
  });
});
