import { TestBed } from '@angular/core/testing';

import { TttAiService } from './ttt-ai.service';

describe('TttAiService', () => {
  let service: TttAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TttAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
