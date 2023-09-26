import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Favourites from "./pages/Favourites"
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";

const router = createBrowserRouter([
	{
		path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <Crypto />,
        children:[
          {
            path: ":coinId",
            element: <CryptoDetails />
          }
        ]
      },
      {
        path: "/trending",
        element: <Trending />,
        children:[
          {
            path: ":coinId",
            element: <CryptoDetails />
          }
        ]
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
