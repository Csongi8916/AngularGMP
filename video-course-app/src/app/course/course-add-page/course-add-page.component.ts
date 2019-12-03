import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss']
})
export class CourseAddPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSaveCourse() {
    console.log('Course saved!');
  }

  onCancelCourse() {
    console.log('Course canceled!');
  }

}
