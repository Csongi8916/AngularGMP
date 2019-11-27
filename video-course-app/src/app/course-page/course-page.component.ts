import { Component, OnInit, NgZone, ViewContainerRef, ChangeDetectorRef, OnChanges } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../Entities/Interfaces';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../shared/UI/confirm-modal/confirm-modal.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnChanges {

  searchInput: string;
  courses: Course[];
  addIcon = faPlus;


  constructor(private courseService: CourseService, public dialog: MatDialog, public ref: ChangeDetectorRef) {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.getCourses();
    console.log('Running: ngOnInit()');
  }

  getCourses() {
    this.courseService.courses.subscribe((data: Course[]) => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  deleteCourse(event) {
    console.log(event.id);
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //console.log(event.id);
        this.courseService.removeCourse(event.id);
        this.courseService.cast.subscribe(data => {
          this.courses = data;
        })
      }
    });
  }

  public trackByFunc(index, course) {
    if (!course) {
      return null;
    }
    return course.id;
  }

  onLoadMore() {
    console.log('Loading more....');
  }

  onClickMe() {
    console.log(`${this.searchInput}`);
  }

  ngOnChanges() {
    console.log('OnChanges')
    this.getCourses();
  }

  //other hooks:

  /*ngOnChanges() {
    console.log('Running: ngOnChanges()');
  }

  ngDoCheck() {
    console.log('Running: ngDoCheck()');
  }

  ngAfterContentInit() {
    console.log('Running: ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('Running: ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('Running: ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('Running: ngAfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('Running: ngOnDestroy()');
  }*/

}
