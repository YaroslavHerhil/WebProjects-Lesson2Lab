import { TestBed } from '@angular/core/testing';

import { TicTacToe4uService } from './tic-tac-toe4u.service';

describe('TicTacToe4uService', () => {
  let service: TicTacToe4uService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicTacToe4uService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
