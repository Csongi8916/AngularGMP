import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faCalendar, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../../Entities/Interfaces';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  clockIcon; calendarIcon; editIcon; removeIcon; testStr; starCharacter;

  @Input() course: Course;

  constructor(private courseService: CourseService, private router: Router) { }

  @Output() delete: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() edit: EventEmitter<Course> = new EventEmitter<Course>();

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
    this.edit.emit(this.course);
    this.router.navigate(['/courses/' + this.course.id]);
  }
}
