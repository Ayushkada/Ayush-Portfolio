import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './favorites.scss'

const Favorites = () => {
  return (
    <div className="container favorites-page">
      <div className = "title">
      <t>
      Favorites
      </t>
    </div>
      <div className="text-zone">
      <h>
      Throughout my life, I have been deeply enveloped in the atmosphere of music. What 
      intrigues me most about playing instruments is the variability that it allows the 
      user. Since the age of 10, this is what has drawn me to be a piano enthusiast. Anyone 
      can create their own song or beat with just a little knowledge of basic music theory. 
      </h>
      <h>
      Over the years I have participated in various sports, which have allowed me to stay 
      active and healthy, while also enjoying myself. Two of my favorite sports include 
      soccer and swimming. I enjoy the emphasis on the importance of teamwork when it comes to 
      soccer, as it is impossible to do good without working well with your team. Although I 
      rarely enjoy playing soccer, the interest ingrained in me for the sport has translated to 
      watching the sport and finding an environment in which others enjoy the same. Overall, the 
      sport has helped me find a better community around me. 
      </h>
      <h>
      One of my favorite sites to learn more about coding and seek entertainment from other people's 
      codes would be codepen. Codepen is an online community where individuals can showcase their 
      unique codes in CSS, HTML, and Javascript, and the website has really transformed my view of 
      what can be created with some creativity. It truly intrigues me what other people create and 
      it brings out my attraction to the computer science field. 
      <a href="https://codepen.io">
        Codepen
      </a>
      </h>
      <h>
      GitHub is a great website that allows for collaboration between coders. It allows individuals a 
      location to showcase their work, whether it is to companies, potential employers, or other coders. 
      In addition, it allows individuals to collaborate on projects together from anywhere in the world. 
      The website has been very helpful to me when looking for inspiration on how to perform a task through code.
      <a href="https://github.com/">
        GitHub
      </a>
      </h>
    </div>
    
  </div>
  );
};
  
export default Favorites;