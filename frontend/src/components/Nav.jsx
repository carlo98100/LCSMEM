import { useContext, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../Routes";
import { FaUserCircle } from "react-icons/fa";
import AutoComplete from "./AutoComplete";
import Login from "../views/Login";
import Dropdown from "./Dropdown";
import { UserContext } from "../contexts/UserContext";

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
					<AutoComplete placeholder="Sök" />

					{user.loggedIn ? (
						<Link to="" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
							<FaUserCircle size={40} color={"#ECA400"} />
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