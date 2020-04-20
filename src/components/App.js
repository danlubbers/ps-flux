import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';
import CoursesHooks from './CoursesHooks';
import ManageCourse from './ManageCourse';
import PageNotFound from './PageNotFound';

function App() {

  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/courses' component={CoursesHooks} />
        <Route path='/about' component={About} />
        <Route path='/course/:slug' component={ManageCourse} />
        <Redirect from='/about-page' to='about' /> {/* This redirects when changing URL's */}
        <Route component={PageNotFound} /> {/* Order matters in a Switch statement, which is why PageNotFound is last  */}
      </Switch>
    </div>
  )
}

export default App;