import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.css']
})
export class CourseContainerComponent implements OnInit {

  private searchInput:string;
  addIcon = faPlus;

  courses: object[] = [
    {id: 1, title: "Video Course 1. Name tag", duration: "1h 28 min", date: "9 Nov, 2018", description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."},
    {id: 2, title: "Video Course 1. Name tag", duration: "1h 28 min", date: "9 Nov, 2018", description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."},
    {id: 3, title: "Video Course 1. Name tag", duration: "1h 28 min", date: "9 Nov, 2018", description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."},
  ];


  constructor() { }

  ngOnInit() {

  }

  onLoadMore() {
    console.log('Loading more....');
  }

  onClickMe() {
    console.log(`${this.searchInput}`);
  }

}
