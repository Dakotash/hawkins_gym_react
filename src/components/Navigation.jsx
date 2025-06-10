import { Link } from "react-router-dom";
import { useState } from "react";
import { LuSquareMenu } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";
import "../css/navigation.css";

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <button className={`nav-toggle ${menuOpen ? 'active' : ''}`}onClick={toggleNav}>
                {menuOpen ? <CgCloseR /> : <LuSquareMenu /> }
            </button>
            
            <ul className={menuOpen ? 'nav-open' : ''}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/amenities">Amenities</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/trainers">Trainers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
