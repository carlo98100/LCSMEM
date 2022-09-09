import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../routes";
import { FaUserCircle } from "react-icons/fa";
import AutoComplete from "./AutoComplete";
import Login from "../views/Login";
import Dropdown from "./Dropdown";

function Nav() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Navbar>
        <NavbarLeft>
          {AppRoutes.filter((item) => item.display === true).map(
            (item, index) => {
              if (item.name === "Login"){

              }
              return (
                <NavLink key={index} to={item.path}>
                  {item.name}
                </NavLink>
              );
            }
          )}
          <Link
            to={"/login"}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <a>Login</a>
            {dropdown && <Dropdown />}
            {/* <FaUserCircle size={40} color={"#ECA400"} /> */}
          </Link>
        </NavbarLeft>
        <NavbarRight>
          <AutoComplete placeholder="Sök" />
          
        </NavbarRight>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  background-color: #006992;
  height: 70px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  z-index: 100;
`;

const NavLink = styled(Link)`
  padding: 26px 10px;
  color: white;
  text-decoration: none;
  height: 100%;

  &:hover {
    background-color: grey;
  }
  &.active {
    color: #eca400;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
`;
const NavbarRight = styled.div``;

const LoginBtn = styled(Link)`
  color: #eca400;
`;

export default Nav;
