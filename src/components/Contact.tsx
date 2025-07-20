import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-text">
            <h3>Let's Work Together</h3>
            <p>
              As I am currently studying, 
              I am looking for opportunities to apply my skills in real-world projects. 
              Please contact me for internship or work opportunities.
            </p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:Hugo2@boreback.com">Hugo2@boreback.com</a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Stockholm, Sweden</span>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a 
            href="https://github.com/penniey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/hugo-lundell-b4b268373/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/flowingeuw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Twitter
          </a>
          <a 
            href="https://discord.gg/MnCu5DND" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;