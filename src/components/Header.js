import '../css/header.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <Link className="logo" to="/"><img src="images/gym-logo.png" alt="Hawkins Gym logo"/></Link>
                   <Navigation/>
                </div>
            </div>
        </header>
    );
};

export default Header;