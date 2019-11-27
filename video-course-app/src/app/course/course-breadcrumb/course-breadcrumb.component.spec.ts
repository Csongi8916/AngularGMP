import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBreadcrumbComponent } from './course-breadcrumb.component';

describe('CourseBreadcrumbComponent', () => {
  let component: CourseBreadcrumbComponent;
  let fixture: ComponentFixture<CourseBreadcrumbComponent>;
  let breadCrumbElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseBreadcrumbComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBreadcrumbComponent);
    component = fixture.componentInstance;
    breadCrumbElement = fixture.nativeElement.querySelector('.breadcrumb-text');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display valid breadcurmb', () => {
    fixture.detectChanges();
    expect(breadCrumbElement.textContent).toContain(component.coursesBreadCrumb);
  });

});
