import { FaCheckSquare } from "react-icons/fa";
import "../css/available-amenities.css";


const AvailableAmenities = () => {
    return (
        <section id="amenities">
            <div className="container">
                <h2>Everything You Need to Reach Your Fitness Goals</h2>

                <ul>
                    <li>
                        <FaCheckSquare />
                        <strong>Free Weights & Dumbbells</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Cardio Equipment</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Resistance Machines</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Outdoor Training Area</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Pool</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Locker Rooms & Showers</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Group classes</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Secure Key Card Access</strong>
                    </li>
                    <li>
                        <FaCheckSquare />
                        <strong>Climate Controlled Environment</strong>
                    </li>
                </ul>

            </div>
        </section>
    );
};

export default AvailableAmenities;




