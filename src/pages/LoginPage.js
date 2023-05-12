import React from "react";
import { useAuth } from "../auth";

function LoginPage(){
    const auth=useAuth();
    const [userName,setUserName]=React.useState('')

    const login=(event)=>{
        event.preventDefault();
        auth.login({userName});
        console.log(userName);
    }
    return (
        <>
            <h2>LoginPage</h2>
            <form onSubmit={login}>
                <label>Write your User Name</label>
                <input 
                    value={userName}
                    onChange={(event)=>setUserName(event.target.value)}
                />
                <button type="submit">Enter</button>
            </form>
        </>
    )
}
export {LoginPage}