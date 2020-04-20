import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';
import CoursesHooks from './CoursesHooks';
import ManageCourse from './ManageCourse';
import PageNotFound from './PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className='container-fluid'>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/courses' component={CoursesHooks} />
        <Route path='/about' component={About} />
        {/* Place more specific routes on top of less specific routes EX. :slug above no slug */}
        <Route path='/course/:slug' component={ManageCourse} />
        <Route path='/course/' component={ManageCourse} />
        <Redirect from='/about-page' to='about' /> {/* This redirects when changing URL's */}
        <Route component={PageNotFound} /> {/* Order matters in a Switch statement, which is why PageNotFound is last  */}
      </Switch>
    </div>
  )
}

export default App;