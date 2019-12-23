import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/Entities/Interfaces';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'vc-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss']
})
export class CourseEditorComponent implements OnInit {

  @Input() course: Course;
  @Output() save: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() cancel: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { 
  }

  onChange(value) {
    if (!value) {
      this.course.length = 0;
    }
  }

  onSaveCourse() {
    this.save.emit(this.course);
  }

  onCancelCourse() {
    this.cancel.emit(this.course);
  }

}
