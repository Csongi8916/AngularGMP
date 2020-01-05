import { Action } from '@ngrx/store';
import { LoginModel } from 'src/app/core/auth/model/User';
import { Course } from 'src/Entities/Interfaces';


export enum CourseActionTypes {
  GetCourses = '[Courses Page] Get Courses',
  AddCourse = '[Course Page] Add Course',
  EditCourse = '[Course Page] Edit Course',
  DeleteCourse = '[Course Page] Delete Course',
}

export class GetCourses implements Action {
  readonly type = CourseActionTypes.GetCourses;
  constructor(public payload: Course[]) { }
}

export class AddCourse implements Action {
  readonly type = CourseActionTypes.AddCourse;
  constructor(public payload: Course[]) { }
}

export class EditCourse implements Action {
  readonly type = CourseActionTypes.EditCourse;
  constructor(public payload: Course[]) { }
}

export class DeleteCourse implements Action {
  readonly type = CourseActionTypes.DeleteCourse;
  constructor(public payload: Course[]) { }
}

export type CourseActions =
  | GetCourses
  | AddCourse
  | EditCourse
  | DeleteCourse;
