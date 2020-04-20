import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 function CourseList(props) {

  return (
    <>
      <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author's ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map(e => {
              return (
                <tr key={e.id}>
                  <td><Link to={`/course/${e.slug}`}>{e.title}</Link></td>
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

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CourseList;
