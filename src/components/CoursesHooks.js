import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

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
        <Link className='btn btn-primary' to='/course'>Add Course</Link>
        <CourseList courses={courses}/>
      </>
    )
  }


export default CoursesHooks;
