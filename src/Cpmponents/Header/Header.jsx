import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <li> <Link to='/'> home</Link> </li>
            <li> <Link to='/phones'> Phones</Link> </li>
            <li> <Link to='/register'> Register</Link> </li>
            <li> <Link to='/login'> Log In</Link> </li>
        </nav>
    );
};

export default Header;