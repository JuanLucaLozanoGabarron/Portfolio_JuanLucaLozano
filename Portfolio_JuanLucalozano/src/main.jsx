import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import AboutMe from "./routes/AboutMe.jsx";
import Projects from "./routes/Projects.jsx";
import ContactMe from "./routes/Contact.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my_projects",
    element: <Projects />,
  },
  {
    path: "/about_me",
    element: <AboutMe />,
  },
  {
    path: "/contact_me",
    element: <ContactMe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
