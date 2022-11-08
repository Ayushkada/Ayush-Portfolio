import React from "react";
import './home.scss';
import me from '/Users/ayush/Desktop/react-portfolio/src/components/Assets/images/me.jpeg';


const Home = () => {
  return (
    <div className="container home-page">
      <div className="title">
        <t>
          Home
        </t>
      </div>
      <div className = "img">
        <img src={me} alt = "my image"/>
      </div>
      <div className="text-zone">
      <h1>
      Hello, My name is Ayush Kadakia and this is my online portfolio. 
      I am currently a sophomore computer science major at Rutgers University 
      School of Arts and Sciences. This website includes some of my hobbies, 
      projects I have done associated with the computer sciences field, and 
      some of the volunteer and work experiences I have gained through my career. 
      The portfolio was created as a method to showcase a little about myself and the work I hae done related to the computer science field. 
      The website was made created through the react library in conjuntion with CSS, HTML,  
      and JavaScript, and was website was deployed through the use of GitHub Pages.
      </h1>
      </div>
      
    </div>
  );
};
  
export default Home;