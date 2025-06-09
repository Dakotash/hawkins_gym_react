import { Link } from 'react-router-dom';
import hawkins from '../images/24-7-hawkins.jpg';
import arnoldTraining from '../images/arnold-training.png';
import mach70 from '../images/70s-mach.jpg';
import arnoldGroup from '../images/arnold-group.jpg';
import "../css/services.css";

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h2>Why Choose Hawkins Gym?</h2>

                <div className="services-gallery">
                    <div className="gallery-item">
                        <img src={hawkins} alt="24/7 gym access"/>
                            <Link to="/memberships">
                                <h3>24/7 Access</h3>
                            </Link>
                    </div>

                    <div className="gallery-item">
                        <img src={arnoldTraining} alt="certified personal trainers"/>
                            <Link to="/trainers">
                                <h3>Expert Trainers</h3>
                            </Link>
                    </div>

                    <div className="gallery-item">
                        <img src={mach70} alt="state-of-the-art gym equipment"/>
                            <Link to="/amenities">
                                <h3>Modern Equipment</h3>
                            </Link>
                    </div>

                    <div className="gallery-item">
                        <img src={arnoldGroup} alt="supportive fitness community"/>
                            <Link to="/contact">
                                <h3>Strong Community</h3>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;


