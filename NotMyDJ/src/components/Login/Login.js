import React from "react";
import "./login.css";

const Login = props => (
  <div className="bg">
    <div className="login-form">
      <div className="myform">
        <h1 className="heading">
          NotMy
          <span style={{ color: "orange" }}>DJ</span>
        </h1>
        <p>
          {/* Like Music Trivia? <br /> Take control of the playlist with the
          fastest correct answer. */}
          Analyze your Spotify playlists for 
        </p>
      </div>
      <div className="myform">
        <a
          style={{ textDecoration: "none" }}
          href="https://accounts.spotify.com/authorize?client_id=dc7cbeda51ca4255aac44343c88b8438&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email&response_type=token&state=123"
        >
          <button className="mybutton">Click here to login to Spotify</button>
        </a>
        <a
          style={{ textDecoration: "none" }}
          href="https://accounts.spotify.com/authorize?client_id=dc7cbeda51ca4255aac44343c88b8438&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email&response_type=token&state=123"
        >
          {" "}
          <button className="secondary-button">
            No Account? Sign up Here!
          </button>
        </a>
      </div>
      <img
        className="store-buttons"
        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
        alt=""
      />
      <img
        className="store-buttons"
        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
        alt=""
      />
    </div>
    <div className="large-right">
      <span className="tagline">
        Who Controls the Music?
        <br />
        The winner, of course.
      </span>
    </div>
  </div>
);

export default Login;
