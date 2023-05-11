import React from "react";
import { useAuth } from "../auth";

function ProfilePage() {
    const auth = useAuth();

    return (
        <>
            <h1>welcome,{auth.user.userName}</h1>

        </>
    );
}

export { ProfilePage }