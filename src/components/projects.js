import React from 'react';
import './projects.scss'
import resillence from './Assets/images/My project.png'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import transit from './Assets/images/Screen Shot 2022-11-20 at 3.46.43 PM.png'
import warehouse from './Assets/images/Screen Shot 2022-11-20 at 3.48.56 PM.png'
import collage from './Assets/images/Screen Shot 2022-11-20 at 3.48.04 PM.png'
import huffman from './Assets/images/Screen Shot 2022-11-20 at 3.46.06 PM.png'

const AutoplaySlider = withAutoplay(AwesomeSlider);
  
const Projects = () => {
  return (
    <div className="container projects-page">
      <div className = "title">
        <t>Projects</t>
      </div>
      <div className="zone">
      <div className="pt1">
      <div className = "txt1">
        <h>
        Developed a sophisticated 2D ship simulation with a grid layout, wherein individual cells unfold in a unique snake-like design. An algorithm I implemented designates random open cells for the initialization of three core elements: a bot, a button, and a fire source. The model also features a dynamic fire spread mechanism, whereby fire extends to neighboring cells based on a user-defined flammability probability. A standout feature is the incorporation of three different bot navigation strategies. Bot 1 aims to locate the button while steering clear of the initial fire, Bot 2 circumnavigates all fire cells on its quest to the button, and Bot 3 exhibits the utmost caution, primarily avoiding fire cells and their immediate neighbors, with a fallback strategy when needed. The primary navigation and pathfinding approach I utilized for these bots was the Breadth-First Search (BFS) algorithm, ensuring efficient and effective bot movement throughout the simulation.
        </h>
      </div>
      <div className="temp">
        <t> 
        2D Ship Simulation and Fire Propagation Model (Java)
            <a
            href="https://github.com/Ayushkada/Java-Projects/tree/main/2D%20Ship%20Simulation%20and%20Fire%20Propagation%20Model%20(Java)"
            target="_blank"
            rel="noreferrer">
            View
            </a>
          </t>
      </div>
      </div>
      <div className="pt2">
      <div className="temp2">
      <div className="img">
        <a 
          href="http://mylearningtools.org"
          target="_blank"
          rel="noreferrer">
          <img src={resillence} alt = "resillence"/>
        </a>
      </div>
      <h1>
        This is the Resillence website where you can learn more about the mission of the company and the applications it is creating to help students. 
      </h1>
      </div>
      <div className = "txt2">
        <h>
          While an App Development Intern at Resilience, I worked with a team to develop an app that works to help children from K-12 learn. 
          The app included games or other activities that the children could perform that would help them improve their social or cognitive skills. 
          The app was created through React and Node with JavaScript, CSS, and HTML. As the app was on the IOS platform, the Xcode IDE was used. 
        </h>
        </div>
        </div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
        >
        <div className="image"><img src={transit} alt = "transit"/> </div>
        <div className="image"><img src={huffman} alt = "huffman"/> </div>
        <div className="image"><img src={collage} alt = "collage"/> </div>
        <div className="image"><img src={warehouse} alt = "warehouse"/> </div>
      </AutoplaySlider>
        <div className="text">
        <h>
          In my Data Structures class, I created a few projects that helped me learn about data structures. These projects consisted of creating linked lists, 
          binary search trees, arrays, hash tables, priority queues, and graphs. Some of these projects are shown above, including transit (A class which contrains methods 
          to perfrom operations on a linked list to simulate transit.), huffman coding (A program which functions as a method to compress data into a binary tree so that it 
          can be stored more efficiently.), Art collage (A program which performs various operation on a collage of images), and RuWarehouse (A program which
          implements a warehouse on a Hash Table like structure, where each entry of the table stores a priority queue.). All these programs were written in java.
        </h>
        </div>
        </div>
    </div>
  );
};
  
export default Projects;