import { TestBed, inject } from '@angular/core/testing';

import { OnTapService } from './on-tap.service';

describe('OnTapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnTapService]
    });
  });

  it('should be created', inject([OnTapService], (service: OnTapService) => {
    expect(service).toBeTruthy();
  }));
});
