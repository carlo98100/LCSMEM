import React, {useEffect, useContext} from "react";
import {AccountContext} from "./AccountContext";
import ChangedPassword from "./ChangedPassword";

export default ()=> {
    const { getSession } = useContext(AccountContext);

    const [loggedIn, setLoggedIn] = useState(False);

    useEffect(() => {
        getSession()
            .then(()=> {
                setLoggedIn(true);
            });
    });
}; [];

return (
    <div className="Settings">
        {loggedIn && (
            <>
            <h2>Settings</h2>
            </>
        )}
    </div>
);