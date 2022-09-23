import React, { useState, useContext } from "react";
import { AccountContext } from "./AccountContext";
import useFetch from "./useFetch";

export default () => {

const [password, setPassword] = useState("");
const [newPassword, setNewPassword] = useState("");

const {data, change, error } = useFetch();

if (change) return <h1>Sparad</h1>

if (error) console.log(error);


useEffect (() => {
    console.log(newPassword);
}); 

    const onSubmit = (event) => {
        event.preventDefault();
    };

    getSession().then(({user}) => {
        user.changePassword(password, newPassword, (err, result) =>{
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        });
    });

};


    return (
        <div>
            <form onSubmit={onSubmit}> 
                <label>Current Password</label>
                <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />

            <label> New Password</label>
            <input
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            />


            <button type="submit">Change password</button>
            </form>
        </div>
    );

    const div = styled.div`
	background-color: vitt?;
	align-items: center;
	padding: 5em;
`;
