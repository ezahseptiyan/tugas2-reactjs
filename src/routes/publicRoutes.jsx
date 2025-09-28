import Home from "../pages/Home";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import About from "../pages/About";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/team", element: <Team /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
];
