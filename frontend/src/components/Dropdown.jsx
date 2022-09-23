import { useContext, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const { logOut } = useContext(UserContext);

  return (
    <SubMenu
      className={dropdown ? SubMenuClicked : SubMenu}
      onClick={() => setDropdown(!dropdown)}
    >
      <SubMenuLi>
        <SubMenuItems>
          <Link
            to="/YourTickets"
            className="YourTickets"
            onClick={() => {
              setDropdown(false);
            }}
          >
            Profile Page
          </Link>
        </SubMenuItems>
      </SubMenuLi>
      <SubMenuLi>
        <SubMenuItems>
          <Link
            to="/login"
            className="logout"
            onClick={() => {
              setDropdown(false);
              logOut();
            }}
          >
            Logout
          </Link>
        </SubMenuItems>
      </SubMenuLi>
    </SubMenu>
  );
}

const SubMenu = styled.div`
  width: 10 rem;
  position: absolute;
  top: 60px;
  list-style: none;
  text-align: start;
`;

const SubMenuLi = styled.div`
  background: rgb(0, 212, 212);
  cursor: pointer;
`;

const SubMenuItems = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  padding: 16px;
  &:hover {
    background-color: grey;
  }
`;

const SubMenuClicked = styled.div`
  display: none;
`;

export default Dropdown;