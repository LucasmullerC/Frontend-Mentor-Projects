import { TestBed } from '@angular/core/testing';

import { OptionsLinkService } from './options-link.service';

describe('OptionsLinkService', () => {
  let service: OptionsLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
