import { useState, useEffect } from "react";

import "../../styles/Contact.css"

export default function Contact() {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", message: "" });



  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ username: "", email: "", message: "" }); // Reset after modal hides
    setModal(true);
  };
  // Auto-close modal after 3 seconds

  useEffect(() => {
    if (modal) {
      const timer = setTimeout(() => {
        setModal(false);
      }, 3000);
      return () => clearTimeout(timer); // Cleanup
    }
  }, [modal]);

  return (
    <div className="container-fluid">
      <div className="contact-container">
        {/* Title */}
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Got a question or need help with your order? We’d love to hear from
          you!
        </p>

        {/* Info Section */}
        <div className="contact-info">
          <p>
            Call us: <strong>0301 0568885</strong>
          </p>
          <p>Office Hours: Mon - Fri | 10am - 5pm</p>
          <p>Email us: muhammadumar.codes@gmail.com</p>
        </div>

        {/* Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Your Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              required
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-gradient">
            Send Message
          </button>
        </form>

        {/* ✅ Success Modal */}
        {modal && (
          <div className="success-message">
            <h2>✅ Thank you, {form.username || "User"}!</h2>
            <p>
              Your message has been sent successfully. We’ll get back to you
              soon.
            </p>
            <button onClick={() => setModal(false)} className="btn-gradient">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
