import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Favourites from "./pages/Favourites"

const router = createBrowserRouter([
	{
		path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <Crypto />
      },
      {
        path: "/trending",
        element: <Trending />
      },
      {
        path: "/favourites",
        element: <Favourites />
      }
    ]
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<RouterProvider router={router} />
	
);
