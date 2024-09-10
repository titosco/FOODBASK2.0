import React from 'react'
import Auth from './Auth'
import './App.css';
import Cards from './Cards';
import About from './About';

const Main = () => {
  return (
    <div className='px-16 py-16 bg-gray-100 md:col-span-2'>
      <Auth />
      <header>
        <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
        <h3 className=' text-2xl font-semibold'>For chefs</h3>
      </header>
      <About />
      <Cards />
    </div>
  )
}

export default Main
