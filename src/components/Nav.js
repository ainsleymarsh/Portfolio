import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Nav = () => { 
   
    return (
    
        <nav className="main-nav">
            <div className={"menu-bar right"}>
                <div className="menu-heading" >
                </div>
                <nav className="menu-body">
                    <ul className="menu">
                    <li className="list"><NavLink to="/" exact>Home</NavLink></li>
                    <li className="list"><NavLink to="/about">About</NavLink></li>
                    <li className="list"><NavLink to="/contact">Contact</NavLink></li>
                   
                    </ul>
                </nav>
                
            </div>
                <div className="logo-class">
                    <a href="/"><img className="logo" alt='logo' src={logo} /></a>
                </div>

                <div className="overlay"></div>
        </nav>
    );
    
};

export default Nav;