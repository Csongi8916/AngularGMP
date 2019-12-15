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
      name: '',
      length: 1,
      date: new Date(),
      description: '',
      topRated: false,
    };
  }

  onChange(value) {
    if (!value) {
      this.course.length = 0;
    }
  }

  saveCourse() {
    this.course.id = this.courseService.getNewId();
    this.courseService.createCourse(this.course);
    this.router.navigate(['/courses']);
  }

  cancelCourse() {
    this.router.navigate(['/courses']);
  }

}
