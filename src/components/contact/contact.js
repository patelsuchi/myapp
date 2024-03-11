import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-bpx1">
                    <h1>“GET IN TOUCH WITH US FOR ALL YOUR QUESTIONS”</h1>
                </div>
                <div className="contact-bpx2">
                    <h3>REACH US</h3>
                    <p>GET IN TOUCH WITH US!</p>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="department">Department:</label>
                            <select id="department" name="department" required>
                                <option value="" disabled selected>Select department</option>
                                <option value="sales">Sales</option>
                                <option value="support">Support</option>
                                <option value="marketing">Marketing</option>
                                <option value="other">Other</option>
                            </select>

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>

                            <button type="submit">Submit</button>
                        </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
