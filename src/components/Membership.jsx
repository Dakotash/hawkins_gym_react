import { Link } from "react-router-dom";

const Membership = (props) => {
    return (
        <div className="membership-item">
            <h3>{props.title}</h3>
            <div className="membership-info">
                <strong>{props.price}</strong>
                <p>{props.description}</p>
                <Link className="primary-btn" to="#">{props.buttonText}</Link>
            </div>
        </div>
    );
};

export default Membership;