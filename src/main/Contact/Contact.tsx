import "./conctact.css";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <h4 className="subtitle">Contact me</h4>
      <div className="contact-form-container card">
        <h4 className="contact-text">You can send me a message here:</h4>
        <div className="message-container">
          <input type="text" placeholder="You name" className="message-input" />
          <input
            type="text"
            placeholder="Your email"
            className="message-input"
          />
          <input
            type="number"
            placeholder="Your phone number"
            className="message-input"
          />
          <textarea
            placeholder="Your message"
            className="message-textarea"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-socialmedia">
          <p className="contact-text">Write me on WhatsApp</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/whatsapp.png"
              alt="whatsapp"
              className="contact-icon"
            />
          </a>
          <p className="contact-text">Or call me</p>
          <p className="contact-link">+54 9 351 814-7093</p>
        </div>
        <div className="contact-socialmedia">
          <p className="contact-text">Send me a email</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/gmail.png"
              alt="gmail"
              className="contact-icon"
            />
          </a>
          <p className="contact-text">Or you can copy it</p>
          <p className="contact-link">matiassimonluduena@gmail.com</p>
        </div>
        <div className="contact-socialmedia">
          <p className="contact-text">Get in touch on LinkedIn</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/linkedin.png"
              alt="linkedin"
              className="contact-icon"
            />
          </a>
          <p className="contact-text">Or you can find me as:</p>
          <p className="contact-link">Matias Simon Ludueña</p>
        </div>
        <div className="contact-socialmedia">
          <p className="contact-text">Follow me on GitHub</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/github.png"
              alt="github"
              className="contact-icon"
            />
          </a>
          <p className="contact-text">Or you can find me as:</p>
          <p className="contact-link">Matias Simon Ludueña</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
