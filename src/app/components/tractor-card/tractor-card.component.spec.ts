import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorCardComponent } from './tractor-card.component';

describe('TractorCardComponent', () => {
  let component: TractorCardComponent;
  let fixture: ComponentFixture<TractorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TractorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TractorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
