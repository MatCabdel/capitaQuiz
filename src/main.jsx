import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import CountryCard from "./components/CountryCard.jsx";
import Countries from "./components/FetchCountries.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch(`https://restcountries.com/v3.1/all`);
            if (response.ok) {
              return await response.json();
            }
          } catch (err) {
            console.error(err);
            return null;
          }
        },
      },
      {
        path: "/card",
        element: <CountryCard />,
      },
      {
        path: "/countries",
        element: <Countries />,
        loader: async ({}) => {
          return response.json;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
