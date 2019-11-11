import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  private searchInput: string;
  courses: object[];
  private addIcon = faPlus;


  constructor() {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: "Video Course 1. Name tag",
        duration: "1 h 28 min",
        date: "9 Nov, 2019",
        topRated: true,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
      },
      {
        id: 2,
        title: "Video Course 1. Name tag",
        duration: "3 h 30 min",
        date: "1 Aug, 2019",
        topRated: false,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
      },
      {
        id: 3,
        title: "Video Course 1. Name tag",
        duration: "0 h 45 min",
        date: "20 Dec, 2019",
        topRated: false,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
      },
    ];

    console.log('Running: ngOnInit()');
  }

  deleteCourse(event) {
    console.log(event.id);
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
