import { useState } from "react";
import "../css/contact-content.css";


const ContactContent = () => {
    const [successful, setSuccessful] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(event.target);

        formData.append("access_key", "abefe226-24c5-4686-9569-5babfae2d2f3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setSuccessful(true);
            form.reset();
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="section-header">
                    <h1>Contact Hawkins Gym</h1>
                    <p className="section-subtitle">Have questions or ready to start your fitness journey? Reach out to our team.</p>
                </div>

                <div className="contact-content">
                    <form method="POST" id="contact-form" onSubmit={onSubmit}>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name </label>
                                <input type="text" name="fullName" placeholder="Enter your full name" id="name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" name="email" placeholder="Enter your email address" id="email" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" name="phone" placeholder="Enter your phone number" id="phone" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select name="subject" id="subject">
                                    <option value="" disabled>Select an option</option>
                                    <option>Membership Information</option>
                                    <option>Personal Training</option>
                                    <option>Group classNamees</option>
                                    <option>Facility Tour</option>
                                    <option>General Inquiry</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message </label>
                            <textarea id="message" name="msg"
                                placeholder="Tell us about your fitness goals or ask us any questions..."></textarea>
                        </div>

                        <div className="form-actions">
                            <button className="primary-btn" type="submit">Send Message</button>
                            <p className="form-note">We'll respond within 24 business hours</p>
                        </div>

                        {successful ? 
                        (<div id="result">
                            <p>Thank you for your message!</p>
                        </div>) :
                         ""
                        }

                    </form>

                    <div className="contact-map">
                        <h3>Our Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.3748594209087!2d-81.31629055508198!3d33.97782338903157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f89701a5aebabd%3A0xcfcd4da823fa3fef!2sKaman&#39;s%20Gym!5e0!3m2!1sen!2sus!4v1748983471742!5m2!1sen!2sus"
                            loading="lazy"  title="Kamans gym"></iframe>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default ContactContent;











