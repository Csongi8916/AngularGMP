import { Component, OnInit, NgZone, ViewContainerRef, ChangeDetectorRef, OnChanges } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../Entities/Interfaces';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../../shared/UI/confirm-modal/confirm-modal.component';


@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnChanges {

  searchInput: string;
  courses: Course[];
  addIcon = faPlus;


  constructor(private courseService: CourseService, public dialog: MatDialog) {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.getCourses();
    console.log('Running: ngOnInit()');
  }

  getCourses() {
    this.courses = this.courseService.courses;
  }

  deleteCourse(event) {
    console.log(event.id);
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses = this.courseService.removeCourse(event.id);
      }
    });
  }

  identify(index, item) {
    return item;
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
