import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';

const CoursesHooks = () => {
 
 const [courses, setCourses] = useState([]);

 useEffect( () => {
   getCourses()
     .then(res => {
       console.log(res)
       setCourses(res)
      })
      .catch(err => console.error(err))
 }, [])

    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={courses}/>
      </>
    )
  }


export default CoursesHooks;
