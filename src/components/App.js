import React from 'react';
import HomePage from './HomePage';
import About from './About';
import Header from './common/Header';

function App() {

  const getPage = () => {
    const route = window.location.pathname;
    if(route === '/about') return <About />
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