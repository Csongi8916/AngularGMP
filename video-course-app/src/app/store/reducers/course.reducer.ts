import { Action } from '@ngrx/store';
import { CourseActionTypes, GetCourses, AddCourse, EditCourse, DeleteCourse } from '../actions/course.action';
import { LoginModel } from '../../core/auth/model/User';
import CourseState from '../model/course.state';
import { Course } from 'src/Entities/Interfaces';

const initialState: CourseState = {
  courses: []
};

export function courseReducer(state: CourseState = initialState, action: GetCourses | AddCourse | EditCourse | DeleteCourse) {
  switch (action.type) {
    case CourseActionTypes.GetCourses:
    case CourseActionTypes.AddCourse:
    case CourseActionTypes.EditCourse:
    case CourseActionTypes.DeleteCourse:
      return {
        ...state,
        courses: action.payload
      };
    default:
      return state;
  }
}
