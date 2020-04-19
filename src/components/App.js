import React from 'react';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';
import Courses from './Courses';

function App() {

  const getPage = () => {
    const route = window.location.pathname;
    if(route === '/about') return <About />
    if(route === '/courses') return <Courses />
    return <HomePage />
  }

  return (
    <div className='container-fluid'>
      <Header />
      {getPage()}
    </div>
  )
}

export default App;