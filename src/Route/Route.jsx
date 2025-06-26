import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "../Pages/Frontend/Root";
import Home from "../Pages/Frontend/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,element:<Home></Home>
      }
    ]
  },
]);

