import React, { useState } from 'react';
import NavigationBar from './Navbar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful form submission, such as showing a success message
        console.log('Contact form submitted successfully:', data.message);
      } else {
        // Handle form submission failure
        console.error('Contact form submission failed:', data.message);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
