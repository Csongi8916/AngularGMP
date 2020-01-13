import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/Entities/Interfaces';
import { CourseService } from '../../services/course.service';
import { CourseBreadcrumbComponent } from '../../course-breadcrumb/course-breadcrumb.component';

@Component({
  selector: 'vc-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.course = { id: 0, name: '', description: '', date: new Date(), length: 0, topRated: false };
      const id: string = params.get('id');
      this.courseService.getCourse(+id).subscribe(result => {
        this.course = result as Course;
        this.courseService.pendingState.next(false);
      });
    });
  }

  onChange(value) {
    if (!value) {
      this.course.length = 0;
    }
  }

  saveCourse($event: any) {
    this.courseService.updateCourse(this.course).subscribe(result => {
      if (result) {
        this.courseService.pendingState.next(false);
        this.router.navigate(['/courses']);
      }
    });
  }

  cancelCourse($event: any) {
    this.router.navigate(['/courses']);
  }

}
