import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudViewComponent } from './stud-view.component';

describe('StudViewComponent', () => {
  let component: StudViewComponent;
  let fixture: ComponentFixture<StudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
