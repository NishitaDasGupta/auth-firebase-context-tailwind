import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './layout/Main'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Orders from './components/Orders'
import Profile from './components/Profile'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProviders from './Providers/AuthProviders'
import PrivateRouter from './PrivateRouter/PrivateRouter'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
      [{
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRouter><Orders></Orders></PrivateRouter>
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      



      ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
