import { Component, OnInit, Input } from '@angular/core';

import { faClock, faCalendar, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  clockIcon = faClock;
  calendarIcon = faCalendar;
  editIcon = faPencilAlt;
  removeIcon = faTrash;

  @Input() id:number;
  @Input() title:string;
  @Input() duration:string;
  @Input() date:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

  onDeleteCourse() {
    console.log(this.id);
  }

}
