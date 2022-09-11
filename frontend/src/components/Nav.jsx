import { useContext, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../routes";
import { FaUserCircle } from "react-icons/fa";
import AutoComplete from "./AutoComplete";
import { UserContext } from "../contexts/UserContext";

function Nav() {
	const { user, logOut } = useContext(UserContext);

	return (
		<Navbar>
			<NavbarLeft>
				{AppRoutes.filter((item) => item.display === true).map((item, index) => {
					return (
						<NavLink key={index} to={item.path}>
							{item.name}
						</NavLink>
					);
				})}
			</NavbarLeft>
			<NavbarRight>
				<RightContainer>
					<AutoComplete placeholder="Sök" />

					{/* <Link to={"/login"}>
						<FaUserCircle size={40} color={"#ECA400"} />
					</Link> */}
					{user.loggedIn ? (
						<>
							{/* <Link to={"/"}>
								<FaUserCircle size={40} color={"#ECA400"} />
							</Link> */}
							{/* <LogOutBtn onClick={logOut}>Logout</LogOutBtn> */}
							<NavLink onClick={logOut} to="/login">
								Logout
							</NavLink>
						</>
					) : (
						<NavLink to="/login">LogIn</NavLink>
					)}

					{/* <UserLoggedIn isLoggedIn={user.loggedIn} /> */}
				</RightContainer>
			</NavbarRight>
		</Navbar>
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

const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export default Nav;
