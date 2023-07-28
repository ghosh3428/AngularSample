import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleStudentComponent } from './view-single-student.component';

describe('ViewSingleStudentComponent', () => {
  let component: ViewSingleStudentComponent;
  let fixture: ComponentFixture<ViewSingleStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleStudentComponent]
    });
    fixture = TestBed.createComponent(ViewSingleStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
