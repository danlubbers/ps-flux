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
      <>
        <h2>Courses</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author's ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(e => {
              return (
                <tr key={e.id}>
                  <td>{e.title}</td>
                  <td>{e.authorId}</td>
                  <td>{e.category}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default Courses;
