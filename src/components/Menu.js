import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul>
                {/* with link */}
                {/* {routes.map((item) => (
                    <li>
                        <Link to={`/${item.to}`}>{item.text}</Link>
                    </li>

                ))} */}

                {/*with NavLink  */}
                {routes.map(item => (
                            
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
                ))}

            </ul>
        </nav>
    );
}

///////ARRAY ROUTES/////////  
const routes = [];
routes.push({
    to: '/',
    text: 'Home'
})
routes.push({
    to: '/blog',
    text: 'Blog'
})
routes.push({
    to: '/profile',
    text: 'profile'
})
routes.push({
    to: '/login',
    text: 'login'
})
routes.push({
    to: '/logout',
    text: 'logout'
})

export { Menu }