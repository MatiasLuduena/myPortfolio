import "./conctact.css";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <div className="about-container">
        <img src="src/assets/contact-me.png" alt="about me" />
        <h3 className="about-subtitle">Contact me</h3>
        <p className="about-description">My phone number: +54 9 351 814-7093</p>
        <p className="about-description">
          My email: matiassimonluduena@gmail.com
        </p>
        <h4 className="about-subtitle">Find me on my social media:</h4>
        <span className="about-socialmedia">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/linkedin.png"
              alt="linkedin"
              className="linkedin-icon"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/github.png"
              alt="github"
              className="github-icon"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="src/assets/whatsapp.png"
              alt="whatsapp"
              className="whatsapp-icon"
            />
          </a>
        </span>
        <div>
          <h4 className="about-subtitle">Or you can send me a message here:</h4>
          <div className="message-container">
            <div className="message-inputs">
              <input
                type="text"
                placeholder="You name"
                className="message-input"
              />
              <input
                type="text"
                placeholder="Your email"
                className="message-input"
              />
            </div>
            <textarea
              placeholder="Your message"
              className="message-textarea"
            ></textarea>
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
