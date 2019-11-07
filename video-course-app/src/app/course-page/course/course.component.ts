import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faClock, faCalendar, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../Entities/Interfaces';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  clockIcon = faClock;
  calendarIcon = faCalendar;
  editIcon = faPencilAlt;
  removeIcon = faTrash;

  @Input() course: Course;

  constructor() { }

  @Output()
  delete: EventEmitter<Course> = new EventEmitter<Course>();

  ngOnInit() {
  }

  onDeleteCourse() {
    this.delete.emit(this.course);
  }

}
