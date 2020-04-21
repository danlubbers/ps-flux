import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from '../actions/actionTypes';


export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // The dispatcher tells all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: course.id 
      ? actionTypes.UPDATE_COURSE
      : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  })
};

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      course: courses
    });
  })
}

export function deleteCourse(id) {
  // debugger;
  return courseApi.getCourses(id).then(_=> {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id
    })
  })
}

