import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Paste from './components/Paste.jsx';
import ViewPaste from './components/ViewPaste.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
        <div>
          <NavBar/>
          <Home/>
        </div>
    },
    {
      path: "/pastes",
      element: 
        <div>
          <NavBar/>
          <Paste/>
        </div>
    },
    {
      path: "/pastes/:id",
      element: 
        <div>
          <NavBar/>
          <ViewPaste/>
        </div>
    },
  ]
);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
