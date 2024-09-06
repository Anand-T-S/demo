import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRegistrationComponent } from './stud-registration.component';

describe('StudRegistrationComponent', () => {
  let component: StudRegistrationComponent;
  let fixture: ComponentFixture<StudRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
