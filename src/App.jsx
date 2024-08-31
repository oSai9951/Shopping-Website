import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import Product from './Components/ProductPage/Product'
import About from './Components/Contact/About'
import Cart from "./Components/CartPage/Cart"

import Error from "./Components/ErrorHandling/Error"
import Hero from './Components/HomePage/Hero'
import Contact from './Components/Contact/Contact'


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Hero/>
      },
      {
           path: "/products",
    element: <Product />,
      },
      {
path: "/cart",
    element:<Cart /> ,
      },
     ],

  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <Error/>,


  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <Error/>
  }

])

  return (
    <>
      
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
