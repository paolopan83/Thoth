import { TestBed, inject } from '@angular/core/testing';

import { SvgDrawerService } from './svg-drawer.service';

describe('SvgDrawerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgDrawerService]
    });
  });

  it('should ...', inject([SvgDrawerService], (service: SvgDrawerService) => {
    expect(service).toBeTruthy();
  }));
});
