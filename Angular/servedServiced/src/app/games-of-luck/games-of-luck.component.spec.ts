import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOfLuckComponent } from './games-of-luck.component';

describe('GamesOfLuckComponent', () => {
  let component: GamesOfLuckComponent;
  let fixture: ComponentFixture<GamesOfLuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesOfLuckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesOfLuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
