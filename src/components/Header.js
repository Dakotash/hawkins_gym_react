import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import logo from '../images/gym-logo.png';
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <Link className="logo" to="/"><img src={logo} alt="Hawkins Gym logo"/></Link>
                   <Navigation/>
                </div>
            </div>
        </header>
    );
};

export default Header;