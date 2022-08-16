import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorBoardComponent } from './tractor-board.component';

describe('TractorBoardComponent', () => {
  let component: TractorBoardComponent;
  let fixture: ComponentFixture<TractorBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TractorBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TractorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
