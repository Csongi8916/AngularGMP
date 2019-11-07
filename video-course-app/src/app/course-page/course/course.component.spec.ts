import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course.component';
import { Course } from '../../../Entities/Interfaces';


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
    let c: Course = { id: 1, title: 'Test Title', duration: '1h 28 min', date: '9 Nov, 2018', description: 'Test description' };
    component.course = c;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get inputs', () => {
    const courseElement: HTMLElement = fixture.nativeElement;
    const titleElement = courseElement.querySelector('.course-title');
    const durationElement = courseElement.querySelector('.duration-text');
    const dateElement = courseElement.querySelector('.date-text');
    const descriptionElement = courseElement.querySelector('.course-description');
    expect(titleElement.textContent).toEqual('Test Title');
    expect(durationElement.textContent).toEqual('1h 28 min');
    expect(dateElement.textContent).toEqual('9 Nov, 2018');
    expect(descriptionElement.textContent).toEqual('Test description');
  });

  // it('should raise selected event when clicked (triggerEventHandler)', () => {
  //   let selectedCourse: Course;
  //   component.delete.subscribe((course: Course) => selectedCourse = course);
  //   const courseDebugElement: DebugElement = fixture.debugElement;
  //   courseDebugElement.triggerEventHandler('click', null);
  //   expect(selectedHero).toBe(expectedHero);
  // });

});
