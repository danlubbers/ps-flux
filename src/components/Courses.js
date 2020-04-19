import React, { Component } from 'react';
import { getCourses } from "../api/courseApi";

class Courses extends Component {
 
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses()
      .then(res => {
        console.log(res)
        this.setState({courses: res})
    })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <h2>
        Courses
      </h2>
    )
  }
}

export default Courses;
