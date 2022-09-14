import { useState } from "react";
import "./css/App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { EventContextProvider } from "./context/eventList";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<EventContextProvider>
			<div className="container">
				<Nav />
				<Routes>
					{AppRoutes.map((item, index) => (
						<Route key={index} path={item.path} element={item.component} />
					))}
				</Routes>
			</div>
		</EventContextProvider>
	);
}

export default App;
