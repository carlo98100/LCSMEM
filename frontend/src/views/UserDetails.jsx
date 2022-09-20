import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import LeftProfileNav from "../components/LeftProfileNav";



function UserDetails() {
  const [ form, setForm] = useState ({
    password: "",
    newpassword: ""
  });

const updateForm = (event) => {
  setForm((prevState) => {
    return { ...prevState, [event.target.name]: event.target.value};
  });

};
const { deletePassword , user, changePassword} = useContext(UserContext);

const onSubmit = async (event) => {
  event.preventDefault();

  await deletePassword (user.email);

  await changePassword (user.email, form.newPassword);

};
  return (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your information</TicketsTitle>
        <div>
            <form onSubmit={onSubmit}> 
                <label>Current Password</label>
                <input
                value={form.password}
                name="password"
                onChange={updateForm}
                label="password"
                type="password"
                />

            <label> New Password</label>
            <input
            value={form.newPassword}
            name="newpassword"
            onChange={updateForm}
            label="newpassword"
            type="password"
            />


            <input type="submit" value="update password"></button>
            </form>
        </div>
      </RightContainer>
    </Container>
  );
}

export default UserDetails;

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  background-color: #67b98d;
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