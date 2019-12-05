import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faCalendar, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../../Entities/Interfaces';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  clockIcon; calendarIcon; editIcon; removeIcon; testStr; starCharacter;

  @Input() course: Course;

  constructor(private router: Router) { }

  @Output()
  delete: EventEmitter<Course> = new EventEmitter<Course>();

  ngOnInit() {
    this.clockIcon = faClock;
    this.calendarIcon = faCalendar;
    this.editIcon = faPencilAlt;
    this.removeIcon = faTrash;
    this.testStr = 'test';
    this.starCharacter = '&#9733;';
  }

  onDeleteCourse() {
    this.delete.emit(this.course);
  }

  onEditCourse() {
    console.log('onEditCourse', this.course);
    this.router.navigate(['/courses/' + this.course.id], { state: { mode: 'edit' } });
  }
}
