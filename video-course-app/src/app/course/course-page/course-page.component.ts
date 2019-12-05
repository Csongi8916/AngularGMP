import { Component, OnInit, NgZone, ViewContainerRef, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../Entities/Interfaces';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnChanges {

  searchInput: string;
  courses: Course[];
  addIcon = faPlus;

  constructor(private courseService: CourseService, public dialog: MatDialog, private router: Router) {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.getCourses();
    console.log('Running: ngOnInit()');
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }

  getCourses() {
    this.courses = this.courseService.getCourses();
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
    console.log('OnChanges');
    this.getCourses();
  }

  // other hooks:

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
