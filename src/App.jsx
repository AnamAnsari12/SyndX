// import Dashboard from './components/Dashboard'
import React from 'react'
import SignIn from './features/auth/SignIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import SignUp from './features/auth/SignUp';
import ForgotPassword from './features/auth/ForgotPassword';
import Protected from './features/auth/Protected';
import UserProfile from './components/UserProfile'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Protected>
        <Dashboard />
        </Protected>
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/forgot",
      element: <ForgotPassword />
    },
    {
      path: "/userProfile",
      element: <UserProfile/>
    },
    {
      path: "*",
      element: <div><h1>Page not found</h1></div>
    }
  ]);
  // <UserProfile/>

  return (
    <>
     <React.StrictMode>
        <RouterProvider router={router} />

      </React.StrictMode>
      {/* <Dashboard /> */}
    </>
  )
}

export default App
