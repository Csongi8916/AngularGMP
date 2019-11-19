import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../Entities/Interfaces';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  private searchInput: string;
  courses: Course[];
  private addIcon = faPlus;


  constructor(private courseService: CourseService) {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.getCourses();
    console.log('Running: ngOnInit()');
  }

  getCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  deleteCourse(event) {
    console.log(event.id);
    this.courseService.removeCourse(event.id);
  }

  onLoadMore() {
    console.log('Loading more....');
  }

  onClickMe() {
    console.log(`${this.searchInput}`);
  }

  //other hooks:

  ngOnChanges() {
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
  }

}
