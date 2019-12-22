import { Component, OnInit, NgZone, ViewContainerRef, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../Entities/Interfaces';
import { CourseService } from '../services/course.service';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnChanges {

  searchInput: string;
  searchCount: number;
  courses: Course[];
  addIcon = faPlus;

  constructor(private courseService: CourseService, public dialog: MatDialog, private router: Router) {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.courses = [];
    this.searchInput = '';
    this.searchCount = 0;
    this.getCourses();
    //this.courseService.pushBreadcrumb('Courses', this.router.url);
    console.log('Running: ngOnInit()');
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  getCourses(isLoadMore = false): void {
    this.courseService.getCourses(isLoadMore).subscribe(result => {
      const newCourses = result as Course[];
      this.courses = [ ...this.courses, ...newCourses ];
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
          this.courseService.getCourses().subscribe(result => {
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
    this.getCourses(true);
  }

  onKey(event: any) { //KeyboardEvent
    if (this.searchCount === 3) {
      //this.debounce(event.target.value);
      this.searchInput = event.target.value;
      this.courseService.searchCourses(this.searchInput).subscribe(result => {
        result.forEach(course => { console.log(course.id + ' - ' + course.name + ' - ' + course.description) });
        this.courses = result;
        /*next(x) {
          console.log(x);
        },
        error(err) {
          console.error('something wrong occurred: ' + err);
        },
        complete() {
          console.log('done');
        }*/
      });
      this.searchCount = 0;
    } else {
      this.searchCount++;
    }
  }

  /*private debounce(textFragment: string): Observable<number> {
    this.searchInput = (textFragment).toLowerCase();
    this.courseService.searchCourses(this.searchInput).subscribe(result => {
      const observable = new Observable<number>(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4);
          subscriber.complete();
        }, 1000);
      });
      return observable;
    });
  }*/

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
