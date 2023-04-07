import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Books from "./Component/Books";
import BookDetail from "./Component/BookDetail";
import LoadingSpinner from "./Component/LoadingSpinner";
import ErrorPage from "./Component/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",

    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetail></BookDetail>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
