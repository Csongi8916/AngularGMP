import { DebugElement, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course.component';
import { Course } from '../../../Entities/Interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  template: `
      <course [course]="course" (delete)="onDelete()">
      </course>`
})
class TestHostComponent {
  course: Course = { id: 1, title: 'Test Title', duration: 88, creationDate: new Date('2018.11.9'), description: 'Test description', topRated: false };
  deleteEmitted: boolean = false;
  onDelete() {
    this.deleteEmitted = true;
  }
}

describe('CourseComponent: Test as a class', () => {
  it('should create', () => {
    const component = new CourseComponent();
    expect(component).toBeTruthy();
  });

  it('should call edit course', () => {
    const component = new CourseComponent();
    spyOn(component, 'onEditCourse');
    component.onEditCourse();
    expect(component.onEditCourse).toHaveBeenCalled();
  });
});

describe('CourseComponent: Stand Alone Test', () => {
  let fixture: ComponentFixture<CourseComponent>;
  let component: CourseComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, FontAwesomeModule],
      declarations: [CourseComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    let course: Course = { id: 1, title: 'Test Title', duration: 88, creationDate: new Date('2018.11.4'), description: 'Test description', topRated: false };
    component.course = course;
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

  it('should emit deletable course', () => {
    let selectedCourse: Course;
    component.delete.subscribe((course: Course) => selectedCourse = course);
    const courseElement: HTMLElement = fixture.nativeElement;
    const btn: HTMLElement = courseElement.querySelector('.delete-btn');
    btn.click();
    expect(selectedCourse).toBe(component.course);
  });

  describe('CourseComponent: TestHostComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let component: TestHostComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      let course: Course = { id: 1, title: 'Test Title', duration: 88, creationDate: new Date('2018.11.4'), description: 'Test description', topRated: false };
      component.course = course;
      fixture.detectChanges();
    });

    it('should catch deletable course in TestHostComponent', () => {
      const element: DebugElement = fixture.debugElement;
      const btn = element.query(By.css('.delete-btn'));
      const btnHtml: HTMLElement = btn.nativeElement;
      btnHtml.click();
      expect(component.deleteEmitted).toBe(true);
    });

  });

});
