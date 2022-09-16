import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import { UserContext } from "../contexts/UserContext";
// import { useLoggedIn } from "../context/LoggedInContext";

function Login() {
	const [form, setForm] = useState({
		email: "exempel@nodehill.com",
		password: "abc123",
	});

	const updateForm = (event) => {
		setForm((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};
	const { logIn } = useContext(UserContext);

	
	const navigate = useNavigate();

	const onSubmit = async (event) => {
		event.preventDefault();

		await logIn(form);
		navigate("/", { replace: true });
	};

  return (
    <Container>
      <LoginCard onSubmit={onSubmit}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <InnerContainer>
          <Input
            value={form.email}
            name="email"
            onChange={updateForm}
            label="Email"
            type="text"
          />
          <Input
            value={form.password}
            name="password"
            onChange={updateForm}
            label="Password"
            type="password"
          />
        </InnerContainer>

        <div style={{ textAlign: "center", marginTop: "1.5em" }}>
          <SubmitBtn type={"submit"} value="Login" />
          <hr style={{ width: "80%" }} />
          <p>New to LiveFanatic?</p>
          <NavLink to={"/signup"}>Create account</NavLink>
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
	/* background-color: #27476e; */
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
	padding: 20px;
	/* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; */
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: #006992;
	margin-bottom: 10em;
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