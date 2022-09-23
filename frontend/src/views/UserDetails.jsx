// import { useContext } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import LeftProfileNav from "../components/LeftProfileNav";
import UserContext from "../contexts/UserContext";

function UserDetails() {
  const [form, setForm] = useState({
    password: "",
    newpassword: "",
  });

  const updateForm = (event) => {
    setForm((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const { deletePassword, user, changePassword } = useContext(UserContext);

  const onSubmit = async (event) => {
    event.preventDefault();

    await deletePassword(user.email);

    await changePassword(user.email, form.newpassword);
  };
  return (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your information</TicketsTitle>
        <ChangePasswordContainer>
          <ChangePasswordCard onSubmit={onSubmit}>
            <Input
              value={form.password}
              name="password"
              onChange={updateForm}
              label="Current Password"
              type="password"
            />
            <Input
              value={form.newpassword}
              name="newpassword"
              onChange={updateForm}
              label="New Password"
              type="password"
            />
            {/* <Input value={form.email} name="email" onChange={updateForm} label="Email" type="text" />
             */}
            {/* <label>Current Password</label>
						<input value={form.password} name="password" onChange={updateForm} label="password" type="password" />

						<label> New Password</label>
						<input value={form.newpassword} name="newpassword" onChange={updateForm} label="newpassword" type="password" /> */}

            {/* <input type="submit" value="update password" /> */}
            <SubmitBtn type={"submit"} value="Update password" />
          </ChangePasswordCard>
        </ChangePasswordContainer>
      </RightContainer>
    </Container>
  );
}

export default UserDetails;

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  background-color: #0f0f0f;
  flex: 1 1 70%;
  // ch = how many characters wide
  min-width: 25ch;
  height: calc(100vh - 70px);
`;

const TextH3 = styled.h3`
  text-align: center;
  background-color: gray;
  padding: 15px;
  border-radius: 10px;
`;

const TicketsTitle = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;
const SubmitBtn = styled.input`
  font-size: 1em;
  padding: 1em 1em;
  border-radius: 1.25em;
  cursor: pointer;
  background-color: #0f0f0f;
  color: #ff9e07;
  border: none;
  margin-top: 2em;
`;

const ChangePasswordCard = styled.form`
  background-color: #ff9e07;
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

const ChangePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
