import {Link} from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
    return(
        <nav>
        <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/memberships">Memberships</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </nav>
    );
};

export default Navigation;