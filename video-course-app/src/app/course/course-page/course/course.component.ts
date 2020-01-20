import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faCalendar, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../../Entities/Interfaces';
import { CourseService } from '../../services/course.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  clockIcon; calendarIcon; editIcon; removeIcon; testStr; starCharacter;

  translateService: TranslateService;
  editText: string;
  deleteText: string;

  @Input() course: Course;

  constructor(private courseService: CourseService, private router: Router, translateService: TranslateService) { 
    this.translateService = translateService;
  }

  @Output() delete: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() edit: EventEmitter<Course> = new EventEmitter<Course>();

  ngOnInit() {
    this.clockIcon = faClock;
    this.calendarIcon = faCalendar;
    this.editIcon = faPencilAlt;
    this.removeIcon = faTrash;
    this.testStr = 'test';
    this.starCharacter = '&#9733;';

    this.translateService.get('EDIT').subscribe((res: string) => {
      this.editText = res;
    });
    this.translateService.get('DELETE').subscribe((res: string) => {
      this.deleteText = res;
    });
  }

  onDeleteCourse() {
    this.delete.emit(this.course);
  }

  onEditCourse() {
    this.edit.emit(this.course);
    this.router.navigate(['/courses/' + this.course.id]);
  }
}
