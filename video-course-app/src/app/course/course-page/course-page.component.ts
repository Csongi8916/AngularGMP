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
    this.courses = [];
    this.getCourses();
    //this.courseService.pushBreadcrumb('Courses', this.router.url);
    console.log('Running: ngOnInit()');
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  getCourses(): void {
    const limit: number = this.courses.length === 0 ? 3 : this.courses.length;
    this.courseService.getCourses(limit).subscribe(result => {
      const newCourses = result as Course[];
      this.courses = newCourses;
    });
  }

  editCourse(event) {
    console.log('breadcrumb addition', event);
    const url = '/courses/' + event.id;
    this.courseService.pushBreadcrumb(event.title, url);
  }

  deleteCourse(event) {
    console.log(event.id);
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const limit: number = this.courses.length - 1;
        this.courseService.removeCourse(event.id).subscribe(result => {
          this.courseService.getCourses(limit).subscribe(result => {
            this.courses = result as Course[];
          });
        });
      }
    });
  }

  identify(index, item) {
    return item;
  }

  onLoadMore() {
    this.getCourses();
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
