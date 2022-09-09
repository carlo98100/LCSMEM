import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../routes";
import { FaUserCircle } from "react-icons/fa";
import AutoComplete from "./AutoComplete";

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
    <SubMenu>
      {categories.map((item) => {
        return (
          <SubMenuLi key={item.id}>
            <Link to={item.path} className={item.title}>
              {item.title}
            </Link>
          </SubMenuLi>
        );
      })}
    </SubMenu>
  );
}

const SubMenu = styled.div`
  width: 10 rem;
  position: absolute;
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
`;
export default Dropdown;
