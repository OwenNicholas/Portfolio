import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="container">
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
              <img src="/assets/github.png"/>
            </a>
            <a href="https://www.linkedin.com/in/owen-nicholas-yap-93486a2aa/">
              <img src="/assets/LinkedIn_icon_circle.svg.png"/>
            </a>
            <a href="https://www.instagram.com/owennicholasyap_/">
              <img src="/assets/instagram.png" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=61422009695&text&type=phone_number&app_absent=0">
              <img src="assets/whatsapp.png" className="whatsapp-icon" alt="WhatsApp" />
            </a>
          </div>
          <a href="https://github.com/OwenNicholas" target="_blank" rel="noopener noreferrer" className="button">
            ⭐ Star Me On Github
          </a>
        </div>
        <div className="image-section">
          <img src="/assets/photomuka2.png" alt="photomuka" />
        </div>
      </div>

      <div className="what-i-do">
        <h1>What I Do?</h1>
      </div>
    </div>
  );
};

export default Home;