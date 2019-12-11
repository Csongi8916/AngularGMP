import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from 'src/Entities/Interfaces';

@Component({
  selector: 'vc-course-breadcrumb',
  templateUrl: './course-breadcrumb.component.html',
  styleUrls: ['./course-breadcrumb.component.css']
})
export class CourseBreadcrumbComponent implements OnInit {

  breadcrumbStack: object[];

  constructor(private courseService: CourseService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbStack = [];
    this.pushBreadcrumb();
  }

  pushBreadcrumb(): void {
    const coursesElement = { title: 'Courses', url: 'courses' };
    this.breadcrumbStack.push(coursesElement);

    if (this.router.url !== '/courses') {
      const otherElement = { title: '' };
      if (this.router.url === '/courses/new') {
        otherElement.title = 'New Course';
      } else {
        this.route.paramMap.subscribe(params => {
          const id: string = params.get('id');
          const course: Course = this.courseService.getCourse(+id);
          otherElement.title = course.title;
        });
      }
      this.breadcrumbStack.push(otherElement);
    }
  }
}
