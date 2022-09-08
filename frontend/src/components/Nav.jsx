import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../routes";
import { FaUserCircle } from "react-icons/fa";
import AutoComplete from "./AutoComplete";
import Login from "../views/Login";

function Nav() {
  return (
    <>
      <Navbar>
        <NavbarLeft>
          {AppRoutes.filter((item) => item.display === true).map(
            (item, index) => {
              return (
                <NavLink key={index} to={item.path}>
                  {item.name}
                </NavLink>
              );
            }
          )}
        </NavbarLeft>
        <NavbarRight>
          <AutoComplete placeholder="Sök" />
          <Link to={"/login"}>
            <FaUserCircle size={40} color={"#ECA400"} />
          </Link>
        </NavbarRight>
      </Navbar>
      <Dropdown />
    </>
  );
}

//Dropdown categories
const categories = [
  {
    id: 1,
    title: "login",
    path: "/login",
    cName: "login",
  },
  {
    id: 2,
    title: "signup",
    path: "/signup",
    cName: "signup",
  },
  {
    id: 3,
    title: "profilepage",
    path: "/profilepage",
    cName: "profilepage",
  },
];

function Dropdown() {
  return (
    <ul>
      {categories.map((item) => {
        return (
          <li key={item.key}>
            <link to={item.path} className={item.title}>
              {/* {item.title} */}
            </link>
          </li>
        );
      })}
    </ul>
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

const subMenu = styled.div`
  width: 10 rem;
  position: absolute;
  list-style: none;
  text-align: start;
`;

const subMenuLi = styled.div`
  background: rgb(0, 212, 212);
  cursor: pointer;
`;

const subMenuItems = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  padding: 16px;
`;

export default Nav;
