import ConsertPage from "./views/ConsertPage";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";

export const AppRoutes = [
  {
    name: "Home",
    path: "/",
    display: true,
    component: <Home />,
  },
  {
    name: "Link1",
    path: "/link-1",
    display: true,
    component: <Home />,
  },
  {
    name: "Link2",
    path: "/link-2",
    display: true,
    component: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    display: false,
    component: <Login />,
  },
  ,
  {
    name: "Signup",
    path: "/signup",
    display: false,
    component: <Signup />,
  },
  {
    name: "ConsertPage",
    path: "/ConsertPage",
    display: true,
    component: <ConsertPage />,
  },
];
