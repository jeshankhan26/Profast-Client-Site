import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "../Pages/Frontend/Root";
import Home from "../Pages/Frontend/Home";
import Error from "../Pages/Frontend/Error";
import AboutUs from "../Pages/Frontend/AboutUs";
import Service from "../Pages/Frontend/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,element:<Home></Home>
      },
      {
        path:"about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"service",
        element:<Service></Service>
      },

    ]
  },
  
]);

