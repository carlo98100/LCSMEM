import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftProfileNav = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <LeftContainer>
        <Text>{user.email}</Text>
        <ProfileNav>
          <Link to="/YourTickets">Your Tickets</Link>
          {/* <Link to="/ProfilePage">Your upcoming concerts</Link> */}
          <Link to="/PurchaseHistory">Purchase History</Link>
          <Link to="/UserDetails">Change user info</Link>
        </ProfileNav>
      </LeftContainer>
    </>
  );
};

export default LeftProfileNav;

const LeftContainer = styled.div`
  font-weight: normal;
  background-color: #ececec;
  flex: 1 1 15%;
  min-width: 15ch;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const Text = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  margin: 0;
  padding: 15px;
  border-bottom: 2px solid black;
`;

const ProfileNav = styled.div`
  background-color: #292929;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a {
    color: white;
    text-align: center;
    padding-top: 3vh;
    flex: 1;
    font-size: 3vh;
    border-bottom: 1px solid black;
    text-decoration: none;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    &:hover {
      background: #545154;
      color: #ff9e07;
      box-shadow: 0 0.5em 0.5em -0.4em #ff9e07;
      cursor: pointer;
    }
  }
`;
