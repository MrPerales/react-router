import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth";

function Menu() {
    // importamos para tener la propiedad user para saber si estan autentificdos 
    const auth = useAuth();

    return (
        <nav>
            <ul>

                {/*with NavLink  */}
                {routes.map(item => {
                    // si private= true y no hay usuario no esta autentificado return null 
                    if (item.private && !auth.user) return null;
                    // para ocultar el enlace asi login
                    if (item.text === 'login' && auth.user) return null;

                    return (
                        <li key={item.to}>

                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue',
                                })}
                                to={item.to}
                            >
                                {item.text}
                            </NavLink>

                        </li>
                    )

                })}

            </ul>
        </nav>
    );
}

///////ARRAY ROUTES/////////  
const routes = [];
routes.push({
    to: '/',
    text: 'Home',
    private: false
})
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false
})
routes.push({
    to: '/profile',
    text: 'profile',
    private: true
})
routes.push({
    to: '/login',
    text: 'login',
    private: false
})
routes.push({
    to: '/logout',
    text: 'logout',
    private: true
})

export { Menu }