import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/Entities/Interfaces';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'vc-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss']
})
export class CourseAddPageComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.course = {
      id: 0,
      title: '',
      duration: 1,
      creationDate: new Date(),
      description: '',
      topRated: false,
    };
  }

  onChange(value) {
    if (!value) {
      this.course.duration = 0;
    }
  }

  onSaveCourse() {
    this.course.id = this.courseService.getNewId();
    this.courseService.createCourse(this.course);
    this.router.navigate(['/courses']);
  }

  onCancelCourse() {
    this.router.navigate(['/courses']);
  }

}
