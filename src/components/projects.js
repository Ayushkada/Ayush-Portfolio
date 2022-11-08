import React from 'react';
import './projects.scss'
  
const Projects = () => {
  return (
    <div className="container projects-page">
      <div className = "title">
      <t>
      Projects
      </t>
    </div>
      <div className="text-zone1">
      <h1>
      One of the projects I created in C was a matrix calculator. The projects allows the user to input one or more files that contain the matrix and dimensions of the matrix. They can choose whether they want to find the transpose of a matrix, the inverse of a matrix, or multiply two or more matrices. For the multiplication and inverse calculations, there is an error message returned if the dimensions do not allow the mulatication of two matrices or the calculation of the inverse matrix. 

      </h1>
      </div>
      <div className = "text-zone2">
      <h2>
      While an App Developement Intern at Resillence, I worked with a team to develop an app that works to help children from K-12 learn. The app included games or other activities that the children could perform that would help them improve their social or cognitive skills. The app was created through react and node with JavaScript, CSS, and HTML. As the app was on the IOS platform, the Xcode IDE was used. 

      </h2>
      </div>
      <div className = "text-zone3">
      <h3>
      In my Data Structures class, I created a program called Huffman Coding. The program functions as a method to compress data into a binary tree so that it can be stored more efficiently. The program was created using Java.

      </h3>
      </div>
      
    </div>
  );
};
  
export default Projects;