import { Link } from "react-router-dom";
import "../css/membership-plans.css";


const MembershipPlans = () => {
    return (
        <section id="memberships">
            <div className="container">
                <h1>CHOOSE YOUR MEMBERSHIP PLAN</h1>
                <div className="membership-types">
                    <div className="membership-item">
                        <h3>Annual Membership</h3>
                        <div className="membership-info">
                            <strong>$600</strong>
                            <p>Best Value! Full 24/7 access for 12 months. Includes all amenities, group classNamees, and guest passes. No enrollment fees!</p>
                            <Link className="primary-btn" to="#">Join Now</Link>
                        </div>
                    </div>

                    <div className="membership-item">
                        <h3>Monthly Membership</h3>
                        <div className="membership-info">
                            <strong>$55</strong>
                            <p>Perfect for flexibility! Full 24/7 access with month-to-month convenience. All amenities included. No long-term commitment!</p>
                            <Link className="primary-btn" to="#">Join Now</Link>
                        </div>
                    </div>

                    <div className="membership-item">
                        <h3>Day Pass</h3>
                        <div className="membership-info">
                            <strong>$25</strong>
                            <p>Try us out! Full facility access for one day. Perfect for visitors or those wanting to experience our gym before committing!</p>
                            <Link className="primary-btn" to="#">Purchase</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MembershipPlans;



