import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar/>
     <Home/>
    </>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
