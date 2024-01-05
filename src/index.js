import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cretif from "./Cretif";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/certif",
    element: <Cretif/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <Cretif/> */}
  </React.StrictMode>
);