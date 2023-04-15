import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Cpmponents/LayOut/Main';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from './Cpmponents/Home/Home';
import Phones from './Cpmponents/Phones/Phones';
import LogIn from './Cpmponents/LogIn/LogIn';
import Register from './Cpmponents/Register/Register';
import Phone from './Cpmponents/Phone/Phone';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/phones',
        element:<Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phones')
      },
      {
        path:'/phone/:id',
        element:<Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`)
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
