import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>Owen Nicholas Yap</h1>
        <p className="subtitle">(owennicholasyap_)</p>
        <p className="description">
          A passionate individual who always thrives to work on end-to-end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
        <div className="social-icons">
          <a href="https://github.com">🐱</a>
          <a href="https://linkedin.com">🔗</a>
          <a href="https://youtube.com">📺</a>
          <a href="https://google.com">🛠</a>
          <a href="https://twitter.com">🐦</a>
        </div>
        <button className="button">⭐ Star Me On Github</button>
      </div>
      <div className="image-section">
        <img src="/assets/photomuka.png" alt="photomuka" />
      </div>
    </div>
  );
};

export default Home;