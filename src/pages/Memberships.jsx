import "../css/membership-plans.css";
import Membership from "../components/Membership";


const Memberships = () => {
    return (
        <section id="memberships">
            <div className="container">
                <h1>CHOOSE YOUR MEMBERSHIP PLAN</h1>
                <div className="membership-types">
                    <Membership
                        title="Annual Membership"
                        price="$600"
                        description="Best Value! Full 24/7 access for 12 months. Includes all amenities, group classNamees, and guest passes. No enrollment fees!"
                        buttonText="Join Now"
                    />

                    <Membership
                        title="Monthly Membership"
                        price="$55"
                        description="Perfect for flexibility! Full 24/7 access with month-to-month convenience. All amenities included. No long-term commitment!"
                        buttonText="Join Now"
                    />

                    <Membership
                        title="Day Pass"
                        price="$25"
                        description="Try us out! Full facility access for one day. Perfect for visitors or those wanting to experience our gym before committing!"
                        buttonText="Purchase"
                    />
                </div>
            </div>
        </section>

    );
};

export default Memberships;