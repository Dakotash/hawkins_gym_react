
import "../css/contact-content.css";


const ContactContent = () => {
    return (
        <section id="contact">
            <div class="container">
                <div class="section-header">
                    <h1>Contact Hawkins Gym</h1>
                    <p class="section-subtitle">Have questions or ready to start your fitness journey? Reach out to our team.</p>
                </div>
        
                <div class="contact-content">
                    <form method="POST" id="contact-form">
        
                        <input type="hidden" name="access_key" value="abefe226-24c5-4686-9569-5babfae2d2f3" />
        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name </label>
                                <input type="text" name="fullName" placeholder="Enter your full name" id="name" />
                            </div>
        
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" name="email" placeholder="Enter your email address" id="email" />
                            </div>
                        </div>
        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" name="phone" placeholder="Enter your phone number" id="phone" />
                            </div>
        
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select name="subject" id="subject">
                                    <option value="" disabled selected>Select an option</option>
                                    <option>Membership Information</option>
                                    <option>Personal Training</option>
                                    <option>Group Classes</option>
                                    <option>Facility Tour</option>
                                    <option>General Inquiry</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                        </div>
        
                        <div class="form-group">
                            <label for="message">Your Message </label>
                            <textarea id="message" name="msg"
                                placeholder="Tell us about your fitness goals or ask us any questions..."></textarea>
                        </div>
        
                        <div class="form-actions">
                            <button class="primary-btn" type="submit">Send Message</button>
                            <p class="form-note">We'll respond within 24 business hours</p>
                        </div>
        
        
                        <div id="result">
        
                        </div>
                    </form>

                    <div class="contact-map">
                    <h3>Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.3748594209087!2d-81.31629055508198!3d33.97782338903157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f89701a5aebabd%3A0xcfcd4da823fa3fef!2sKaman&#39;s%20Gym!5e0!3m2!1sen!2sus!4v1748983471742!5m2!1sen!2sus"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        
                </div>
        
               
            </div>
        </section>
    );
};

export default ContactContent;











