import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Drivers from './pages/Drivers.jsx'
import RegisterDriver from './pages/RegisterDriver.jsx'
import Trucks from './pages/Trucks.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
    <Route path="home" element={<Home/>} />
    <Route path="drivers" element={<Drivers/>} />
    <Route path="register-driver" element={<RegisterDriver/>} />
    <Route path="trucks" element={<Trucks/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);