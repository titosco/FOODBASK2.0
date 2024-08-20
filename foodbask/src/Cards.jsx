import React from 'react';
import './App.css';
import img1 from './img/asun pasta.webp';
import img2 from './img/Egg Fried Rice.jpeg';
import img3 from './img/spicy chicken pasta.jpeg';
import img4 from './img/Native Jollof Rice.webp';
import img5 from './img/fried rice.jpeg';
import img6 from './img/jollof rice.jpeg';

const Cards = () => {
  return (
    <div>
      <h4 className="font-bold mt-12 pb- border-b border-gray-200">
        Lastest Recipes
      </h4>
      <div className="mt-8 grid lg:grid-cols-3  gap-10">
        {/* cards for lastest recipes goes here */}
        {/* card 1 */}
        <div className="card hover:shadow-lg">
          <img
            src={img1}
            alt="Asun"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div className="m-4">
            <span className="font-bold">Asun Afredo Pasta</span>
            <span className="block text-gray-500 text-sm">
              Recipe by BigGee
            </span>
            <div className="badge">
              <svg
                class="w-5 inline-block"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>90 mins</span>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card hover:shadow-lg">
          <img
            src={img2}
            alt="Asun"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div className="m-4">
            <span className="font-bold">Egg fried Rice</span>
            <span className="block text-gray-500 text-sm">
              Recipe by Camson
            </span>
            <div className="badge">
              <svg
                class="w-5 inline-block"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>75 mins</span>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card hover:shadow-lg">
          <img
            src={img3}
            alt="Asun"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div className="m-4">
            <span className="font-bold">Spicy Chicken Pasta</span>
            <span className="block text-gray-500 text-sm">
              Recipe by Magixs
            </span>
            <div className="badge">
              <svg
                class="w-5 inline-block"
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>95 mins</span>
            </div>
          </div>
        </div>
      </div>
      {/* cards for lastest recipes goes here */}
      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        <h4 className="font-bold mt-12 pb- border-b border-gray-200">
          Most Popular Recipes
        </h4>
        <div className="mt-8">
          {/* card 4 */}
          <div className="card hover:shadow-lg mb-10">
            <img
              src={img4}
              alt="Asun"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Native Jollof Rice</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Kcee
              </span>
              <div className="badge">
                <svg
                  class="w-5 inline-block"
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>65 mins</span>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="card hover:shadow-lg mb-10">
            <img
              src={img5}
              alt="Asun"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Fried Rice</span>
              <span className="block text-gray-500 text-sm">
                Recipe by BigTits
              </span>
              <div className="badge">
                <svg
                  class="w-5 inline-block"
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>70 mins</span>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="card hover:shadow-lg mb-10">
            <img
              src={img6}
              alt="Asun"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Jollof Rice</span>
              <span className="block text-gray-500 text-sm">
                Recipe by MamiDean
              </span>
              <div className="badge">
                <svg
                  class="w-5 inline-block"
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>75 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
            More Recipes
        </div>
      </div>
    </div>
  );
};

export default Cards;
