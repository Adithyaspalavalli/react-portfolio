import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // ✅ Import the CSS file

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5o7ie6c',
      'template_uc5xbsd',
      form.current,
      'hDrs_uFU3-NeDtVOn'
    )
    .then((result) => {
      alert('Message sent successfully!');
      console.log(result.text);
    }, (error) => {
      alert('Failed to send message.');
      console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <div className="contact-container" id="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
