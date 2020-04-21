import React, { useState, useEffect } from 'react';
// import { getCourses } from "../api/courseApi";
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';

const CoursesHooks = () => {
 
 const [courses, setCourses] = useState(courseStore.getCourses());

 useEffect( () => {
   courseStore.addChangeListener(onChange);
   if (courseStore.getCourses().length === 0) loadCourses();
   return () => courseStore.removeChangeListener(onChange);
   //  getCourses()
   //    .then(res => {
     //      console.log(res)
     //      setCourses(res)
     //     })
     // .catch(err => console.error(err))
    }, [])
    
function onChange() {
  // debugger;
  setCourses(courseStore.getCourses())
 }

    return (
      <>
        <h2>Courses</h2>
        <Link className='btn btn-primary' to='/course'>Add Course</Link>
        <CourseList courses={courses} delete={deleteCourse}/>
      </>
    )
  }


export default CoursesHooks;
