import { TestBed, inject } from '@angular/core/testing';

import {Options, OptionsDataService} from './option-data.service';

describe('OptionsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionsDataService]
    });
  });

  it('should ...', inject([OptionsDataService], (service: OptionsDataService) => {
    expect(service).toBeTruthy();
  }));

  it('has a parseRowHeights method', () => {
    expect(Options.parseRowHeights("1, 2")).toEqual([1, 2]);
  })
});
