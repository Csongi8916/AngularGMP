import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { CourseBreadcrumbComponent } from './course/course-breadcrumb/course-breadcrumb.component';
import { CoursePageComponent } from './course/course-page/course-page.component';
import { CourseComponent } from './course/course-page/course/course.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        CourseBreadcrumbComponent,
        CoursePageComponent,
        CourseComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'video-course-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('video-course-app');
  });

});
