import ConsertPage from "./views/ConsertPage";
import Home from "./views/Home";
import Login from "./views/Login";
import PickStream from "./views/PickStream";
import Signup from "./views/Signup";
import ProfilePage from "./views/ProfilePage";
import PurchaseHistory from "./views/PurchaseHistory";
import UserDetails from "./views/UserDetails";
import YourTickets from "./views/YourTickets";
import Stream from "./views/Stream";
import Checkout from "./views/Checkout";

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
    name: "ConsertPage",
    path: "/ConsertPage",
    display: true,
    component: <ConsertPage />,
  },
  {
    name: "Login",
    path: "/login",
    display: true,
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
    name: "ProfilePage",
    path: "/ProfilePage",
    display: false,
    component: <ProfilePage />,
  },
  {
    name: "PurchaseHistory",
    path: "/PurchaseHistory",
    display: false,
    component: <PurchaseHistory />,
  },
  {
    name: "UserDetails",
    path: "/UserDetails",
    display: false,
    component: <UserDetails />,
  },
  {
    name: "TicketInfo",
    path: "/TicketInfo",
    display: false,
    component: <YourTickets />,
  },
	{
		name: "Pick Stream",
		path: "/PickStream",
		display: true,
		component: <PickStream />,
	},{
		name: "Stream",
		path: "/Stream/:id",
		display: false,
		component: <Stream />,
	}
  {
    name: "Checkout",
    path: "/Checkout",
    display: false,
    component: <Checkout />,
  },
];
