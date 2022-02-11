import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from './Components';



export default function App() {
  return(
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}