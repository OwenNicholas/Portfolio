import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="top-section">
        <div className="text-section">
          <h1>Owen Nicholas Yap</h1>
          <p className="subtitle">(owennicholasyap_)</p>
          <p className="description">
            A passionate individual who always thrives to work on end-to-end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>
          <div className="social-icons">
            <a href="https://github.com/OwenNicholas">
              <img src="/assets/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/owen-nicholas-yap-93486a2aa/">
              <img src="/assets/LinkedIn_icon_circle.svg.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/owennicholasyap_/">
              <img src="/assets/instagram.png" alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=61422009695&text&type=phone_number&app_absent=0">
              <img src="/assets/whatsapp.png" className="whatsapp-icon" alt="WhatsApp" />
            </a>
          </div>
          <a
            href="https://github.com/OwenNicholas"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            ⭐ Star Me On Github
          </a>
        </div>
        <div className="image-section">
          <img src="/assets/photomuka2.png" alt="photomuka" />
        </div>
      </div>

      {/* What I Do Section */}
      <div className="what-i-do">
        <h1 className="title">What I Do?</h1>
        <div className="what-i-do-content">
          {/* Left Section: Illustration */}
          <div className="illustration-section">
            <img src="/assets/illustration.png" alt="Illustration" />
          </div>
          {/* Right Section: Description */}
          <div className="text-section">
            <h2>Full Stack Software Development</h2>
            <div className="tech-icons">
              <img src="/assets/react.png" alt="React" />
              <img src="/assets/python.png" alt="Python" />
              <img src="/assets/javascript.png" alt="JavaScript" />
              <img src="/assets/html.png" alt="HTML" />
              <img src="/assets/css.png" alt="CSS" />
            </div>
            <ul className="what-i-do-list">
              <li>⚡ Building scalable and maintainable web applications.</li>
              <li>⚡ Proficient in front-end and back-end technologies.</li>
              <li>⚡ Passionate about user-friendly interfaces and efficient APIs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;