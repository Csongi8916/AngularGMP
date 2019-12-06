import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vc-course-breadcrumb',
  templateUrl: './course-breadcrumb.component.html',
  styleUrls: ['./course-breadcrumb.component.css']
})
export class CourseBreadcrumbComponent implements OnInit {

  coursesBreadCrumb: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.coursesBreadCrumb = 'Courses';
  }

}
