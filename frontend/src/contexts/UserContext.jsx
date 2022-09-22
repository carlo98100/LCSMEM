import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function getUsersTickets() {
  let temp = [];
  tickets.forEach((ticket) => {
    if (ticket.UserId === getUserId()) {
      temp.push(ticket);
    }
  });
  return temp;
}

export function UserContextProvider(props) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || {
    id: "",
    email: "",
    loggedIn: false,
  });
  const [userList, setUserList] = useState([]);

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

      await setUser({
        id: jsonData.id,
        email: form.email,
        loggedIn: jsonData.loggedIn,
      });

      sessionStorage.setItem("user", JSON.stringify({
        id: jsonData.id,
        email: form.email,
        loggedIn: jsonData.loggedIn,}))

      if (response.status == 403) {
        isSignedIn();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isLoggedIn = async () => {
    if (!user.loggedIn) {
      navigate("/login", { replace: true });
    }
  };

  //   const isLoggedInWithTicket = async (streamId) => {
  //     // if (user.loggedIn && getUsersTickets() === user.id) {
  //     // }

  //     let userTicket = getUsersTickets().find(
  //       (ticket) => (ticket.streamId = streamId)
  //     );

  //     return user.loggedIn && userTicket !== null ? true : false;
  //   };

  const isSignedIn = async () => {
    try {
      const response = await fetch("/data/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonData = await response.json();

      setUser({
        id: jsonData.id,
        email: jsonData.email,
        loggedIn: jsonData.loggedIn,
      });
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
    setUserList(data);
  };

  const getUserId = () => {
    return userList?.find?.(userL => userL.email === user.email)?.id
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, logOut, logIn, userList, isLoggedIn, getUserId }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
