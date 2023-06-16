import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsInfoComponent } from './meetings-info.component';

describe('MeetingsInfoComponent', () => {
  let component: MeetingsInfoComponent;
  let fixture: ComponentFixture<MeetingsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsInfoComponent]
    });
    fixture = TestBed.createComponent(MeetingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
