import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
// import * as courseApi from '../api/courseApi';
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseActions';
import { toast } from 'react-toastify';

const ManageCourse = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null, 
    category: ''
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path `/courses/:slug`
    if (courses.length === 0) {
      courseActions.loadCourses();
    }  else if (slug) {
      // courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange)
    
  }, [courses.length, props.match.params.slug]);


  const onChange = () => {
    setCourses(courseStore.getCourses());
  } 

  const handleChange = ({target}) => {
    setCourse({...course, [target.name]: target.value})
  }

  const formIsValid = () => {
    const _errors = {};

    if(!course.title) _errors.title = 'Title is required!!!';
    if(!course.authorId) _errors.authorId = 'Author ID is required!!!';
    if(!course.category) _errors.category = 'Category is required!!!';

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(!formIsValid()) return;
    courseActions.saveCourse(course).then(_=> {
      props.history.push('/courses');
      toast.success('Course Saved!')
    })
    // courseApi.saveCourse(course).then(_=> {
    //   props.history.push('/courses');
    //   toast.success('Course Saved!')
    // })


  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  )
}

export default ManageCourse;
