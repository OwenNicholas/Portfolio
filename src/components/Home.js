import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <>
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
                <div className="tooltip-container" data-tooltip="React">
                  <img className="react" src="/assets/react.png" alt="React" />
                </div>
                <div className="tooltip-container" data-tooltip="Python">
                  <img className="python" src="/assets/python.png" alt="Python" />
                </div>
                <div className="tooltip-container" data-tooltip="JavaScript">
                  <img src="/assets/javascript.png" alt="JavaScript" />
                </div>
                <div className="tooltip-container" data-tooltip="HTML">
                  <img className="html" src="/assets/html.png" alt="HTML" />
                </div>
                <div className="tooltip-container" data-tooltip="CSS">
                  <img className="css" src="/assets/css.png" alt="CSS" />
                </div>
              </div>
              <ul className="what-i-do-list">
                <li>⚡ Building scalable and maintainable web applications.</li>
                <li>⚡ Proficient in front-end and back-end technologies.</li>
                <li>⚡ Passionate about user-friendly interfaces and efficient APIs.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cloud-infra">
          <div className="cloud-infra-content">
            {/* Left Section: Illustration */}
            <div className="illustration-section">
              <img src="/assets/cloud-storage.png" alt="Person with Heroku" className="illustration" />
            </div>
            {/* Right Section: Description */}
            <div className="description-section">
              <h1>Cloud Infra-Architectures</h1>
              <div className="cloud-tech-icons">
                <div className="tooltip-container" data-tooltip="Docker">
                  <img className="docker" src="/assets/docker.png" alt="Docker" />
                </div>
                <div className="tooltip-container" data-tooltip="Firebase">
                  <img src="/assets/firebase.png" alt="Firebase" />
                </div>
                <div className="tooltip-container" data-tooltip="MongoDB">
                  <img className="mongodb" src="/assets/mongoDB.png" alt="MongoDB" />
                </div>
                <div className="tooltip-container" data-tooltip="PostgreSQL">
                  <img className="sql" src="/assets/postgreSQL.png" alt="PostgreSQL" />
                </div>
              </div>
              <ul className="cloud-infra-list">
                <li>⚡ Experience working on multiple cloud platforms.</li>
                <li>⚡ Hosting and maintaining websites on virtual machines with database integration.</li>
                <li>⚡ Deploying deep learning models on the cloud for mobile use.</li>
                <li>⚡ Setting up streaming jobs from DB to server or vice-versa on GCP and AWS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <hr className="footer-divider" />
        <p>© 2024 Owen Nicholas Yap</p>
        <p>Made with Passion</p>
    </div>
  </>
  );
};

export default Home;