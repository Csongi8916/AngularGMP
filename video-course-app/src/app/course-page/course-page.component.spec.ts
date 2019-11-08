import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursePageComponent } from './course-page.component';
import { CourseComponent } from './course/course.component';

describe('CoursesPageComponent', () => {
  let component: CoursePageComponent;
  let fixture: ComponentFixture<CoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, FontAwesomeModule],
      declarations: [CoursePageComponent, CourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain atleast one course', () => {
    expect(component.courses.length).toBeGreaterThan(0);
  });

  it('should have load more btn', () => {
    const element: HTMLElement = fixture.nativeElement;
    const loadMoreBtn = element.querySelector('.load-more button');
    expect(loadMoreBtn).toBeTruthy();
    expect(loadMoreBtn.textContent.toLowerCase()).toContain('load more');
  });

  it('should run once search button click event handler', () => {
    spyOn(component, 'onClickMe')
    const element: DebugElement = fixture.debugElement;
    const btnElement: HTMLElement = element.query(By.css('.search-btn')).nativeElement;
    btnElement.click();
    expect(component.onClickMe).toHaveBeenCalledTimes(1);
  });

});
