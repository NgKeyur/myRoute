import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyRouteComponent } from './track-my-route.component';

describe('TrackMyRouteComponent', () => {
  let component: TrackMyRouteComponent;
  let fixture: ComponentFixture<TrackMyRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackMyRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackMyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
