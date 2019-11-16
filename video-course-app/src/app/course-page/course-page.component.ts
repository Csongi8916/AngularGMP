import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../Entities/Interfaces';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'vc-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  private searchInput: string;
  courses: Course[];
  private addIcon = faPlus;


  constructor() {
    console.log('Running: constructor()');
  }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: "Video Course 2. Name tag",
        duration: 88,
        creationDate: new Date("2019.11.09"),
        topRated: true,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        filter:  "",
        sortable: null
      },
      {
        id: 2,
        title: "Video Course 3. Name tag",
        duration: 210,
        creationDate: new Date("2019.08.01"),
        topRated: false,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        filter:  "",
        sortable: null
      },
      {
        id: 3,
        title: "Video Course 1. Name tag",
        duration: 45,
        creationDate: new Date("2019.12.20"),
        topRated: false,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        filter:  "",
        sortable: null
      },
    ];

    //TODO It is just value copy, there are issues oportunities!!!
    this.courses.forEach(c => {
      c.filter = c.title;
      c.sortable = c.creationDate;
    });
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
