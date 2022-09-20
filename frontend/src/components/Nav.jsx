import { useContext, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../Routes";
import { FaUserCircle } from "react-icons/fa";
import AutoComplete from "./AutoComplete";
import Login from "../views/Login";
import Dropdown from "./Dropdown";
import UserContext from "../contexts/UserContext";

function Nav() {
	const [dropdown, setDropdown] = useState(false);
	const { user } = useContext(UserContext);
	return (
		<>
			<Navbar>
				<NavbarLeft>
					{AppRoutes.filter((item) => item.display === true).map((item, index) => {
						return (
							<NavLink key={index} to={item.path}>
								{item.name}
							</NavLink>
						);
					})}
					{/* <Link to={"/login"} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
						<a>Login</a>
					</Link> */}
				</NavbarLeft>
				<NavbarRight>
					{user.loggedIn ? (
						<Link to="" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
							<FaUserCircle size={40} color={"#ff9e07"} />
							{dropdown && <Dropdown />}
						</Link>
					) : (
						<NavLink key="" to="/login">
							Login
						</NavLink>
					)}
				</NavbarRight>
			</Navbar>
		</>
	);
}

const Navbar = styled.nav`
	background-color: #0f0f0f;
	background-image: url("https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80");
	background-size: cover;
	background-position: center;
	border-bottom: dashed;
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
	color: #ececec;
	text-decoration: none;
	height: 100%;
	transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
	&:hover {
		background-color: #292929;
		color: #ff9e07;
        box-shadow: 0 0.5em 0.5em -0.4em #ff9e07;
	}
	&.active {
		color: #ff9e07;
		box-shadow: 0 0.5em 0.5em -0.4em #ff9e07;
	}
`;

const NavbarLeft = styled.div`
	display: flex;
`;
const NavbarRight = styled.div``;

const LoginBtn = styled(Link)`
	color: #ececec;
`;

export default Nav;