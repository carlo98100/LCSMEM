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
		try {
			const response = await fetch("/data/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form), // body data type must match "Content-Type" header
			});

			const jsonData = await response.json();

			setUser({ email: form.email, loggedIn: jsonData.loggedIn });

			if (response.status == 403) {
				isSignedIn();
			}
		} catch (err) {
			console.error(err);
		}
	};

	const isSignedIn = async () => {
		try {
			const response = await fetch("/data/login", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const jsonData = await response.json();

			setUser({ email: jsonData.email, loggedIn: jsonData.loggedIn });
		} catch (err) {
			console.error(err);
		}
	};

	const logOut = async () => {
		try {
			const response = await fetch("/data/login", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const jsonData = await response.json();

			setUser({ email: "", loggedIn: jsonData.loggedIn });
			navigate("/login", { replace: true });
		} catch (err) {
			console.error(err);
		}
	};

	return <UserContext.Provider value={{ user, setUser, logOut, logIn }}>{props.children}</UserContext.Provider>;
}

export default UserContextProvider;
