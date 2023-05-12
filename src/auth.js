import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


const AuthContext=React.createContext();

function AuthProvider({children}){
    const [user,setUser]=React.useState(null)
    const navigate=useNavigate();
    
    const login=({userName})=>{
        setUser({userName})
        navigate('/profile')
    }
    const logout=()=>{
        setUser(null)
        navigate('/')

    }
    //objeto que tenga la info del usuario metodos y propiedades que se necesiten para la autentifificacion 
    const auth={user,login,logout};

    return (
        <AuthContext.Provider
            value={auth}
        >
            {children}
        </AuthContext.Provider>
    );
}

//funcion para consumir authContext para que podamos exportar useAuth y no tengamos que importar
//   useContext y el authContext
function useAuth(){
   const auth=React.useContext(AuthContext);
   return auth
}
// proteger rutas para que no entren desde la url 
function ProtectRoute(props){
    const auth=useAuth();
    if(!auth.user){
        return <Navigate to='/login'/>
    }
    return props.children;
}


export{
    AuthProvider,
    useAuth,
    ProtectRoute
};