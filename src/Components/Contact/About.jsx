import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 border-2 border-blue-500  mt-8 mb-8">
      <h1 className="text-4xl font-bold mb-4 mt-6 text-center border-b-4 border-black">About This E-Commerce Website</h1>
      <p className="text-xl mb-4">I have created this front end website keeping some tools and libraries in my mind!</p>
      <p className="text-xl mb-4">Here are some tools and libraries used in this project:</p>
      <ul className="list-disc mb-4">
        <li className="mb-2">
          <h2 className="text-2xl font-bold">React:</h2>
          <p className="text-lg">Popular front end library of javascript. I used <span className='font-medium'>React Hooks</span> for creating components for this project</p>
        </li>
        <li className="mb-2">
          <h2 className="text-2xl font-bold">TailwindCss:</h2>
          <p className="text-lg">CSS framework.</p>
        </li>
        <li className="mb-2">
          <h2 className="text-2xl font-bold">Axios:</h2>
          <p className="text-lg">I used this to get request from a third party API and merged it with <span className='font-medium'>createAsyncThunk</span> provided by Redux Toolkit</p>
        </li>
        <li className="mb-2">
          <h2 className="text-2xl font-bold">Redux toolkit:</h2>
          <p className="text-lg">Popular state management tool. I have used <span>createAsyncThunk</span> for an api call. I have used redux to show, add & remove products from the cart.</p>
        </li>
      </ul>
      <div className="mb-4">
        <h3 className="text-2xl font-bold">API for building this project:</h3>
        <p className="text-lg">
          <a
            href="https://fakestoreapi.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            https://fakestoreapi.com/docs
          </a>
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>Contact</button>
        </Link>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default About;