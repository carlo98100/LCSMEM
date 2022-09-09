import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
	const [user, setUser] = useState({
		email: "",
		loggedIn: false,
	});

	const setUserContext = (email, loggedIn) => {
		setUser({ email: email, loggedIn: loggedIn });
	};

	return <UserContext.Provider value={{ user, setUserContext }}>{props.children}</UserContext.Provider>;
}

export default UserContextProvider;
