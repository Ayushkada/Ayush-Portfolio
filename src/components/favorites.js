import React from 'react';
import './favorites.scss'
import codepen from './Assets/images/ezgif.com-gif-maker-removebg-preview-2.png'
import ReactPlayer from 'react-player'
import github from './Assets/images/github-logo.png'

const Favorites = () => {
  return (
    <div className="container favorites-page">
      <div className = "title">
        <t>Favorites</t>
      </div>
      <div className="zone">
      <div className="pt1">
      <div className = "txt1">
      <h>
      Throughout my life, I have been deeply enveloped in the atmosphere of music. What 
      intrigues me most about playing instruments is the variability that it allows the 
      user. Since the age of 10, this is what has drawn me to be a piano enthusiast. Anyone 
      can create their own song or beat with just a little knowledge of basic music theory. 
      </h>
      </div>
      <div className="temp">
      <div className="player-wrapper">
      <ReactPlayer 
        controls
        className = "react-player"
        width="100%"
        height="100%" 
        url = 'https://soundcloud.com/redreapergrell/beethoven-moonlight-sonata?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'/>
      </div>
      <h1>
        This is one of my favorite piano songs to play and listen to. This helps relieve stress and is also effective as a break when studying. 
      </h1>
      </div>
      </div>
      <div className="pt2">
      <div className="temp">
      <div className="player-wrapper2">
      <ReactPlayer 
        controls
        className = "react-player"
        width="100%"
        height="100%" 
        url = 'https://www.youtube.com/watch?v=PSanJ5swYBM'/>
      </div>
      <h2>
        In my free time, I enjoy watching highlights on youtube. One of the most entertaining players to watch is Lionel Messi. These are some of his highlights. 
      </h2>
      </div>
      <div className = "txt2">
      <h>
      Over the years I have participated in various sports, which have allowed me to stay 
      active and healthy, while also enjoying myself. Two of my favorite sports include 
      soccer and swimming. I enjoy the emphasis on the importance of teamwork when it comes to 
      soccer, as it is impossible to do good without working well with your team. Although I 
      rarely enjoy playing soccer, the interest ingrained in me for the sport has translated to 
      watching the sport and finding an environment in which others enjoy the same. Overall, the 
      sport has helped me find a better community around me. 
      </h>
      </div>
      
      </div>
      <div className="pt1">
      <div className = "txt1">
      <h>
      One of my favorite sites to learn more about coding and seek entertainment from other people's 
      code would be codepen. Codepen is an online community where individuals can showcase their 
      unique code in CSS, HTML, and Javascript, and the website has truly transformed my view of 
      what can be created with some creativity. It truly intrigues me what other people create and 
      it brings out my attraction to the computer science field.
      </h>
      </div>
      <div className="img">
        <a 
          href="https://codepen.io"
          target="_blank"
          rel="noreferrer">
          <img src={codepen} alt = "codepen"/>
        </a>
      </div>
      </div>
      <div className="pt2">
      <div className="img2">
        <a 
          href="https://github.com"
          target="_blank"
          rel="noreferrer">
          <img src={github} alt = "github"/>
        </a>
      </div> 
      <div className = "txt2">
      <h>
      GitHub is a great website that allows for collaboration between coders. It allows individuals a 
      location to showcase their work, whether it is to companies, potential employers, or other coders. 
      In addition, it allows individuals to collaborate on projects together from anywhere in the world. 
      The website has been very helpful to me when looking for inspiration on how to perform a task through code.
      </h>
      </div>
      </div>
    </div>
  </div>
  );
};
  
export default Favorites;