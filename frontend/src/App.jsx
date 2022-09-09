import "./css/App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import UserContextProvider from "./contexts/UserContext";

function App() {
	return (
		<UserContextProvider>
			<div className="container">
				<Nav />
				<Routes>
					{AppRoutes.map((item, index) => (
						<Route key={index} path={item.path} element={item.component} />
					))}
				</Routes>
			</div>
		</UserContextProvider>
	);
}

export default App;
