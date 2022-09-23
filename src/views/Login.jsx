import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const updateForm = (event) => {
    setForm((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <LoginCard onSubmit={onSubmit}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <InnerContainer>
          <Input
            value={form.username}
            name="username"
            onChange={updateForm}
            label="Username"
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
