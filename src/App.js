import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomeScreen";
import Classes from "./pages/ClassesScreen";
import Test from "./pages/TestScreen";
import TestKids from "./components/Test/Kids/TestKids";
import TestTeens from "./components/Test/Teens/TestTeens";
import TestAdults from "./components/Test/Adults/TestAdults";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cursuri",
    element: <Classes />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-online",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-online/v1",
    element: <TestKids />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-online/v2",
    element: <TestTeens />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test-online/v3",
    element: <TestAdults />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
