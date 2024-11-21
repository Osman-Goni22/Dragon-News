import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CategoryNews from './Components/Pages/CategoryNews';
import Login from './Components/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Navigate to={'/category/01'}></Navigate>
      },
      {
        path:'/category/:id',
        element:<CategoryNews></CategoryNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path:'/news',
    element:<h1>News Layout</h1>
  },
  {
     path:'/login',
     element:<Login></Login>
  },
  {
    path:'*',
    element:<h1>Error</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)


