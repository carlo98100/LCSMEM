import "./css/App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import UserContextProvider from "./contexts/UserContext";
import { EventContextProvider } from "./context/eventList";

function App() {
	return (
		<UserContextProvider>
			<EventContextProvider>
				<div className="container">
					<Nav />
					<Routes>
						{AppRoutes.map((item, index) => (
							<Route key={index} path={item.path} element={item.component} />
						))}
					</Routes>
				</div>
			</EventContextProvider >
		</UserContextProvider>
	);
}

export default App;
