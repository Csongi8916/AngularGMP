import { Component, OnInit, NgZone, ViewContainerRef, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../Entities/Interfaces';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import CourseState from 'src/app/store/model/course.state';
import * as CourseActions from '../../store/actions/course.action';


@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnChanges {

  subject = new Subject<string>();
  searchInput: string;
  courses: Course[];
  addIcon = faPlus;

  constructor(private courseService: CourseService, public dialog: MatDialog, private router: Router, private store: Store<{authInfo: CourseState}>) {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.courses = [];
    this.searchInput = '';
    this.getCourses();
    this.searchMethod();
  }

  private searchMethod(): void {
    this.subject
    .pipe(debounceTime(500))
    .subscribe(v => {
      this.searchInput = v.toLowerCase();
      this.courseService.searchCourses(this.searchInput).subscribe(result => {
        this.courses = result;
        this.courseService.pendingState.next(false);
      });
    });
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  getCourses(isLoadMore = false): void {
    this.courseService.getCourses(isLoadMore).subscribe(result => {
      const newCourses = result as Course[];
      if (isLoadMore) {
        this.courses = [ ...this.courses, ...newCourses ];
      } else {
        this.courses = [ ...newCourses ];
      }
      this.courseService.pendingState.next(false);
    });
  }

  /*private searchMethod(): void {
    this.subject
    .pipe(debounceTime(500))
    .subscribe(v => {
      this.searchInput = v.toLowerCase();
      this.courseService.searchCourses(this.searchInput).subscribe(result => {
        this.store.dispatch(new CourseActions.GetCourses(this.courses));
        this.store.source.subscribe(x => {
          this.courses = x.cor.courses;
        });
        this.courseService.pendingState.next(false);
      });
    });
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  getCourses(isLoadMore = false): void {
    this.courseService.getCourses(isLoadMore).subscribe(result => {
      const newCourses = result as Course[];
      if (isLoadMore) {
        const gettedCourses = [ ...this.courses, ...newCourses ];
        this.store.dispatch(new CourseActions.GetCourses(gettedCourses));
        this.store.source.subscribe(x => {
          this.courses = x.cor.courses;
        });
      } else {
        const gettedCourses = [ ...newCourses ];
        this.store.dispatch(new CourseActions.GetCourses(gettedCourses));
        this.store.source.subscribe(x => {
          this.courses = x.cor.courses;
        });
      }
      this.courseService.pendingState.next(false);
    });
  }*/

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
          this.courseService.getCourses().subscribe(result => {
            this.courses = result as Course[];
            this.courseService.pendingState.next(false);
          });
        });
      }
    });
  }

  identify(index, item) {
    return item;
  }

  onLoadMore() {
    this.getCourses(true);
  }

  onKey(event: any) { //KeyboardEvent
    const input: string = event.target.value;
    if (input.length === 0) {
      this.courses = [];
      this.getCourses();
    }
    if (input.length >= 3) {
      this.subject.next(input);
    }
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
