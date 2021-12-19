import { useState } from 'react';
import '../assets/styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState({ exists: false, status: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = await fetch('/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setResponse({ exists: true, status: validation.ok });

    if (validation.ok) {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      document.getElementById('email').classList.remove('invalid');

      setName('');
      setEmail('');
      setMessage('');
    } else {
      document.getElementById('email').classList.add('invalid');
    }
  };

  return (
    <div className="Contact">
      <h1>Want to work together or have any questions?</h1>
      <div className="socials">
        <a
          href="mailto:feyzan.aydemir@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg"
            alt="gmail"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/feyzanaydemir/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.github.com/feyzanaydemir/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
            alt="github"
          />
        </a>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <div>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {response.exists ? (
            !response.status ? (
              <span>Invalid email</span>
            ) : (
              <span>Message successfully sent</span>
            )
          ) : null}
        </div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="4"
          cols="20"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {name?.length > 3 && email?.length > 6 && message?.length > 2 ? (
          <button type="submit">Send</button>
        ) : (
          <button disabled>Send</button>
        )}
      </form>
    </div>
  );
}

export default Contact;
