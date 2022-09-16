import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const updateForm = (event) => {
    setForm((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  let navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(form));
    console.log("sending", form);
    try {
      const response = await fetch("/data/users", {
        method: "POST", // GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(form), // body data type must match "Content-Type" header
      });

      if (response.changes != 0) {
        console.log("success");
        //fetch login user
        //if login user succed store in context
        //useNavigate kolla in, navigate (/home), ta med replace:true så att det replacar routen och användaren inte kommer tillbaka till skapa konto ifall de klickar bakåt
        navigate("/", { replace: true });
      } else {
        console.log("failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <SignupCard onSubmit={onSubmit}>
        <h1 style={{ textAlign: "center" }}>Create Account</h1>
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
          <SubmitBtn type={"submit"} value="CreateAccount" />
          <hr style={{ width: "80%" }} />
        </div>
      </SignupCard>
    </Container>
  );
}

export default Signup;

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

const SignupCard = styled.form`
  background-color: white;
  height: 50vh;
  min-width: 320px;
  width: 20vw;
  min-height: 400px;
  border-radius: 20px;
  margin-top: 10vh;
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