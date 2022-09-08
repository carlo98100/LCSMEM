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
  },
  {
    id: 2,
    title: "signup",
    path: "/signup",
  },
  {
    id: 3,
    title: "profilepage",
    path: "/profilepage",
  },
];

function Dropdown() {
  return (
    <ul>
      {categories.map((item) => {
        return (
          <li key={item.key}>
            <link to={item.path} className={item.title}></link>
          </li>
        );
      })}
    </ul>
  );
}
