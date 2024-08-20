import React, { useState } from 'react';
import './App.css';

const Navigation = () => {

 const [isMenuHidden, setIsMenuHidden]= useState(true);

 const handleBurgerClick = ()=>{
  setIsMenuHidden(!isMenuHidden);
 }

  return (
    <div className="md:col-span-1 md:flex md:justify-end">
      <nav className="text-right">
        <div className="flex justify-between items-center">
          <h1 className="hover:text-gray-700">Food Bask</h1>
          <div className="px-4 cursor-pointer md:hidden" id="burger" onClick={handleBurgerClick}>
            <svg
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </div>
        <ul className={`text-sm mt-6 md:block ${isMenuHidden ? 'hidden' : ''}`} id="menu">
          <li className="text-gray-700 font-bold py-1">
            <a
              href="/"
              className="px-4 flex justify-end hover:border-r-4 hover:border-primary"
            >
              <span>Home</span>
              <svg
                class="w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="px-4 flex justify-end hover:border-r-4 hover:border-primary"
            >
              <span>About</span>
              <svg
                class="w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </a>
          </li>
          <li className='py-1'>
            <a href="/" className='px-4 flex justify-end hover:border-r-4 hover:border-primary'>
              <span>Contact</span>
              <svg
                class="w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
