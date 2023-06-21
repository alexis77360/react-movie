import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={nav => nav.isActive ? "nav-active" : ""}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coup-de-coeur" className={nav => nav.isActive ? "nav-active" : ""}>Coup de coeur</NavLink>
                    </li>

                
                </ul>



            </nav>
            <h1> Movie App </h1>
            
        </div>
    );
};

export default Header;