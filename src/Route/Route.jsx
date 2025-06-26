import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "../Pages/Frontend/Root";
import Home from "../Pages/Frontend/Home";
import Error from "../Pages/Frontend/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,element:<Home></Home>
      }
    ]
  },
]);

