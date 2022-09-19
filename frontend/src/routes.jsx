import Home from "./views/Home";
import ConsertPage from "./views/ConsertPage";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ProfilePage from "./views/ProfilePage";
import PurchaseHistory from "./views/PurchaseHistory";
import UserDetails from "./views/UserDetails";
import YourTickets from "./views/YourTickets";
import PickStream from "./views/PickStream"
import Stream from "./views/Stream"
import EventPage from "./views/EventPage"

export const AppRoutes = [
	{
		name: "Home",
		path: "/",
		display: true,
		component: <Home />,
	},
	{
		name: "ConsertPage",
		path: "/ConsertPage/:artistId",
		display: false,
		component: <ConsertPage />,
	},
	{
		name: "Login",
		path: "/login",
		display: false,
		component: <Login />,
	},
	{
		name: "Signup",
		path: "/signup",
		display: false,
		component: <Signup />,
	},
	{
		name: "ProfilePage",
		path: "/ProfilePage",
		display: true,
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
		name: "YourTickets",
		path: "/YourTickets",
		display: false,
		component: <YourTickets />,
	},
	{
		name: "Pick Stream",
		path: "/PickStream",
		display: true,
		component: <PickStream />,
	}, {
		name: "Stream",
		path: "/Stream/:id",
		display: false,
		component: <Stream />,
	},
	{
		name: "Event page",
		path: "/EventPage",
		display: true,
		component: <EventPage />,
	},
];
