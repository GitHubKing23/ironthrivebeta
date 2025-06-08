// src/pages/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css'; // Import the CSS for the Contact page

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleqpoyb"); // Use your Formspree form ID

  if (state.succeeded) {
    return <p>Thanks for joining! We will get back to you soon.</p>;
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Fill out the form below to register for personal training sessions or ask any questions.</p>

      {/* Form Submission */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
