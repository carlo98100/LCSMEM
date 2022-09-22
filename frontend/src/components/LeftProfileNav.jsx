import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const LeftProfileNav = ({open}) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <LeftContainer open={open}>
        <Burger />
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
  width: 20%;
  min-width: 15ch;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
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
