import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStuffComponent } from './new-stuff.component';

describe('NewStuffComponent', () => {
  let component: NewStuffComponent;
  let fixture: ComponentFixture<NewStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
