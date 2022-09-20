import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider(props) {
	const [user, setUser] = useState({
		id: "",
		email: "",
		loggedIn: false,
	});
	const navigate = useNavigate();

	useEffect(() => {
		fetchUsers();
	  }, []);

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

			setUser({ id: jsonData.id, email: form.email, loggedIn: jsonData.loggedIn });

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

			setUser({ id: jsonData.id, email: jsonData.email, loggedIn: jsonData.loggedIn });
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

	const fetchUsers = async () => {
		const response = await fetch("/data/users");
		const data = await response.json();
		console.log(data);
		setUserList(data);
	  };

	return <UserContext.Provider value={{ user, setUser, logOut, logIn, userList }}>{props.children}</UserContext.Provider>;
}

export default UserContext;
