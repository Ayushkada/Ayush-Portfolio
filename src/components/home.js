import React from "react";
import './home.scss';
import me from './Assets/images/Kadakia_A_17.jpg';
import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="title">
        <t>Home</t>
      </div>

      <div className="bottom">
        <div className="image">
          <img src={me} alt="my pic" />
        </div>
        <div className="text">
          <h1>
          Greetings, I'm Ayush Kadakia. Welcome to my digital portfolio. As a junior computer science major at Rutgers University's School of Arts and Sciences, I've acquired extensive knowledge in the field and am eager to apply it professionally. This platform highlights both my personal interests and the notable projects I've undertaken in computer science. Furthermore, you can delve into details of my volunteer work and professional engagements, all of which have enhanced my adaptability in various settings. This website, meticulously crafted with React and complemented by CSS, HTML, and JavaScript, is hosted on GitHub Pages.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;