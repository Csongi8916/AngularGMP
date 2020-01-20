import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/Entities/Interfaces';
import { CourseService } from '../services/course.service';
import { TranslateDirective, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'vc-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss']
})
export class CourseEditorComponent implements OnInit {

  @Input() course: Course;
  @Output() save: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() cancel: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.save.emit(this.course);
  }

  onChange(value) {
    if (!value) {
      this.course.length = 0;
    }
  }

  onCancelCourse() {
    this.cancel.emit(this.course);
  }

  /*validateJuriNameFactory(): ValidatorFn {
    return (c: AbstractControl) => {

      let isValid = c.value === 'Juri';

      if (isValid) {
        return null;
      } else {
        return {
          juriName: {
            valid: false
          }
        };
      }
    }
  }*/

}
