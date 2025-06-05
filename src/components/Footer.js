import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
        <div class="container">
            <p>&copy; 2025 Hawkins Gym - Lexington South Carolina</p>
            <p class="footer-links">
                <Link to="easter-egg">Privacy Policy</Link> | <Link to="#">Terms of Service</Link>
            </p>
        </div>
    </footer>
    );
};

export default Footer;