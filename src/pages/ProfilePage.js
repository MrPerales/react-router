import React from "react";
import { useAuth } from "../auth";

function ProfilePage() {
    const auth = useAuth();

    return (
        <>
            <h1>Profile</h1>
            <p>welcome,{auth.user.userName}</p>
            {console.log(auth.user,'user')}

        </>
    );
}

export { ProfilePage }