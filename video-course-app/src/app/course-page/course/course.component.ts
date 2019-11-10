import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faClock, faCalendar, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../Entities/Interfaces';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  clockIcon; calendarIcon; editIcon; removeIcon; testStr; starCharacter;

  @Input() course: Course;

  constructor() { }

  @Output()
  delete: EventEmitter<Course> = new EventEmitter<Course>();

  ngOnInit() {
    this.clockIcon = faClock;
    this.calendarIcon = faCalendar;
    this.editIcon = faPencilAlt;
    this.removeIcon = faTrash;
    this.testStr = "test";
    this.starCharacter = "&#9733;";
  }

  onDeleteCourse() {
    this.delete.emit(this.course);
  }

  onEditCourse() {
    console.log('onEditCourse', this.course);
  }

}
