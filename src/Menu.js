import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul>
                {/* with link */}
                {/* <li>
                    <Link to='/'>Home</Link>
                </li> */}

                {/*with NavLink  */}
                {routes.map(item =>
                    <li>

                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'blue',
                            })}
                            to={item.to}
                            key={item.text}
                        >
                            {item.text}
                        </NavLink>

                    </li>
                )}

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


export { Menu }