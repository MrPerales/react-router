import React from "react";
import { useAuth } from "../auth";

function Logout(){
    const auth=useAuth();

    const logout=(e)=>{
        e.preventDefault();
        console.log('logout');
        auth.logout();
    }

    return (
        <>
            <h2>LogoutPage</h2>
            <form onSubmit={logout}>
                <label>Logout?</label>
                
                <button type="submit">Exit</button>
            </form>
        </>
    )
}

export {Logout}