import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider(props) {
	const [user, setUser] = useState({
		email: "",
		loggedIn: false,
	});
	const navigate = useNavigate();

	const logIn = async (form) => {
		await fetch("/data/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form), // body data type must match "Content-Type" header
		})
			.then((response) => {
				if (response.status == 403) {
					isSignedIn();
				} else {
					response.json();
				}
			})
			.then((data) => setUser({ email: form.email, loggedIn: data.loggedIn }))
			.catch((err) => console.error(err));
	};

	const isSignedIn = async () => {
		await fetch("/data/login")
			.then((response) => response.json())
			.then((data) => setUser({ email: data.email, loggedIn: data.loggedIn }))
			.catch((err) => console.error(err));

		setUser({ email: data.email, loggedIn: data.loggedIn });
	};

	const logOut = async () => {
		await fetch("/data/login", {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				setUser({ email: "", loggedIn: data.loggedIn });
				navigate("/login", { replace: true });
			})
			.catch((err) => console.error(err));
	};

	return <UserContext.Provider value={{ user, logOut, logIn }}>{props.children}</UserContext.Provider>;
}

export default UserContextProvider;