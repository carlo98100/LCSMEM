import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";

function Login() {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const updateForm = (event) => {
		setForm((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		axios.post("/data/login", form, {});
		// try {
		// 	const response = await fetch("http://localhost:3333/data/login", {
		// 		method: "POST", // *GET, POST, PUT, DELETE, etc.
		// 		mode: "no-cors", // no-cors, *cors, same-origin
		// 		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		// 		credentials: "same-origin", // include, *same-origin, omit
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			// 'Content-Type': 'application/x-www-form-urlencoded',
		// 		},
		// 		redirect: "follow", // manual, *follow, error
		// 		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		// 		body: JSON.stringify(form), // body data type must match "Content-Type" header
		// 	});
		// } catch (err) {
		// 	console.error(err);
		// }
	};

	return (
		<Container>
			<LoginCard onSubmit={onSubmit}>
				<h1 style={{ textAlign: "center" }}>Login</h1>
				<InnerContainer>
					<Input value={form.email} name="email" onChange={updateForm} label="Email" type="text" />
					<Input value={form.password} name="password" onChange={updateForm} label="Password" type="password" />
				</InnerContainer>

				<div style={{ textAlign: "center", marginTop: "1.5em" }}>
					<SubmitBtn type={"submit"} value="Login" />
					<hr style={{ width: "80%" }} />
					<p>New to LiveFanatic?</p>
					<NavLink to={"/"}>Create account</NavLink>
				</div>
			</LoginCard>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	display: flex;
	position: fixed;
	margin-top: 70px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #27476e;
	z-index: 1;
	justify-content: center;
	align-content: center;
`;

const InnerContainer = styled.div`
	margin: 0 40px;
`;

const LoginCard = styled.form`
	background-color: white;
	height: 50vh;
	min-width: 320px;
	width: 20vw;
	min-height: 400px;
	border-radius: 20px;
	margin-top: 10vh;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: #006992;
`;

const SubmitBtn = styled.input`
	font-size: 1em;
	padding: 0.5em 1em;
	border-radius: 1.25em;
	cursor: pointer;
	background-color: #eca400;
	border: none;
	margin-bottom: 1em;
`;
