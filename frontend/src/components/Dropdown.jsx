import { useContext, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

//Dropdown categories
const categories = [
	// {
	//   id: 1,
	//   title: "login",
	//   path: "/login",
	//   cName: "login",
	// },
	// {
	//   id: 2,
	//   title: "signup",
	//   path: "/signup",
	//   cName: "signup",
	// },
	// {
	//   id: 3,
	//   title: "profilepage",
	//   path: "/profilepage",
	//   cName: "profilepage",
	// },
	// {
	//   id: 4,
	//   title: "Logout",
	//   path: "/",
	//   cName: "begone",
	// },
];

function Dropdown() {
	const [dropdown, setDropdown] = useState(false);
	const { logOut } = useContext(UserContext);

	return (
		<SubMenu className={dropdown ? SubMenuClicked : SubMenu} onClick={() => setDropdown(!dropdown)}>
			{/* {categories.map((item) => {
        return (
          <SubMenuLi key={item.id}>
            <SubMenuItems>
              <Link
                to={item.path}
                className={item.title}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </SubMenuItems>
          </SubMenuLi>
        );
      })} */}

			<SubMenuLi>
				<SubMenuItems>
					<Link
						to="/profilepage"
						className="profilepage"
						onClick={() => {
							setDropdown(false);
						}}
					>
						Profilepage
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