import Home from "./views/Home";
import ConsertPage from "./views/ConsertPage";
import Login from "./views/Login";
import Signup from "./views/Signup";
import PurchaseHistory from "./views/PurchaseHistory";
import UserDetails from "./views/UserDetails";
import YourTickets from "./views/YourTickets";
import Stream from "./views/Stream";
import EventPage from "./views/EventPage";
import SpecificEventPage from "./views/SpecificEventPage";
import Checkout from "./views/Checkout";
import CancelOrderPage from "./views/CancelOrderPage";
import ConfirmOrderPage from "./views/ConfirmOrderPage";

export const AppRoutes = [
  {
    name: "Home",
    path: "/",
    display: true,
    component: <Home />
  },
  {
    name: "ConsertPage",
    path: "/ConsertPage/:artistId",
    display: false,
    component: <ConsertPage />
  },
  {
    name: "Login",
    path: "/login",
    display: false,
    component: <Login />
  },
  {
    name: "Signup",
    path: "/signup",
    display: false,
    component: <Signup />
  },
  {
    name: "YourTickets",
    path: "/YourTickets",
    display: false,
    component: <YourTickets />,
    requiredAuth: true
  },
  {
    name: "PurchaseHistory",
    path: "/PurchaseHistory",
    display: false,
    component: <PurchaseHistory />,
    requiredAuth: true
  },
  {
    name: "UserDetails",
    path: "/UserDetails",
    display: false,
    component: <UserDetails />,
    requiredAuth: true
  },
  {
    name: "Stream",
    path: "/Stream/:id",
    display: false,
    component: <Stream />,
    requiredAuth: true,
    requiredTicket: true
  },
  {
    name: "Event page",
    path: "/EventPage",
    display: true,
    component: <EventPage />
  },
  {
	name: "SpecificEventPage",
	path: "/SpecificEventPage/:eventId",
	display: true,
	component: <SpecificEventPage />
},
{
	name: "Checkout",
	path: "/Checkout",
	display: true,
	component: <Checkout />,
  requiredAuth: true
},
{
	name: "CancelOrderPage",
	path: "/order/cancel",
	display: false,
	component: <CancelOrderPage />
},
{
	name: "ConfirmOrderPage",
	path: "/order/success/:sessionId",
	display: false,
	component: <ConfirmOrderPage />
}
];
