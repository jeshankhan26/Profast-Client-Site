import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

