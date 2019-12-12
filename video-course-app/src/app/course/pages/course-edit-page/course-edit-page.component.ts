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

  mode: string;
  course: Course;
  originalCourse: Course;
  durationInput: number;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: string = params.get('id');
      this.mode = Number(params.get('id')) ? 'edit' : 'create';
      if (this.mode === 'create') {
        this.course = {
          id: 0,
          title: '',
          duration: 1,
          creationDate: new Date(),
          description: '',
          topRated: false,
        };
      } else if (this.mode === 'edit') {
        this.course = { ...this.courseService.getCourse(+id) };
      }
    });
  }

  ngOnChanges() {
    console.log(this.course.duration);
  }

  onChange(value) {
    if (!value) {
      this.course.duration = 0;
    }
  }

  onSaveCourse() {
    if (this.mode === 'create') {
      this.course.id = this.courseService.getNewId();
      this.courseService.createCourse(this.course);
    } else {
      this.courseService.updateCourse(this.course);
    }

    this.router.navigate(['/courses']);
  }

  onCancelCourse() {
    // this.course = { ...this.originalCourse };
    this.router.navigate(['/courses']);
  }


}
