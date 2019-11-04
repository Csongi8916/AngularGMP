import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [CourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have value of input fields', () => {
    console.log(`ID:  ${component.id}`);
    debugger;

    let hasId: boolean = component.id ? true : false;
    let hasTitle: boolean = component.title ? true : false;
    let hasDuration: boolean = component.duration ? true : false;
    let hasDate: boolean = component.date ? true : false;
    let hasDescription: boolean = component.description ? true : false;

    let isExpectable = hasId && hasTitle && hasDuration && hasDate && hasDescription;
    expect(isExpectable).toBe(true);
  });
});
