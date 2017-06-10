import { TestBed, inject } from '@angular/core/testing';

import { OptionsDataService } from './option-data.service';

describe('OptionsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionsDataService]
    });
  });

  it('should ...', inject([OptionsDataService], (service: OptionsDataService) => {
    expect(service).toBeTruthy();
  }));
});
