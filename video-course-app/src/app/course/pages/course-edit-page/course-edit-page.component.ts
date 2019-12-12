import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/Entities/Interfaces';
import { CourseService } from '../../services/course.service';

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
      const id: string = params.get('id');
      this.course = { ...this.courseService.getCourse(+id) };
    });
  }

  onChange(value) {
    if (!value) {
      this.course.duration = 0;
    }
  }

  onSaveCourse() {
    this.courseService.updateCourse(this.course);
    this.router.navigate(['/courses']);
  }

  onCancelCourse() {
    this.router.navigate(['/courses']);
  }

}
