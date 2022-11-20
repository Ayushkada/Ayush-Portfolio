import React from 'react';
import './resume.scss'
  
const Resume = () => {
  return (
    <div className="container skills-page">
      <div className="title">
        <a>Skills</a>
      </div>
      <div className="skills">
        <t><h>JavaScript</h></t>
        <t><h>Java</h></t>
        <t><h>C</h></t>
        <t><h>HTML</h></t>
        <t><h>CSS</h></t>
        <t><h>React</h></t>
        <t><h>MySql</h></t>
        <t><h>XCode</h></t>
        <t><h>VSCode</h></t>
        <t><h>JSON</h></t>
        <t><h>Git</h></t>
        <t><h>Time Management</h></t>
        <t><h>Teamwork</h></t>
        <t><h>Leadership</h></t>
        <t><h>Critical Thinking</h></t>
      </div>
      <div className="title2">
        <t>Work and Volunteer Experiences</t>
      </div>
      <div className ="experiences">
      <div className="job1">
        <j>Resillence Inc. - App Development Intern</j>
      </div>
      <div className="time1">
        <p>June 2022 - September 2022</p>
      </div>
      <div className="skills1">
        <h>Skills: React, JavaScript, Xcode, HTML, CSS, JSON, API</h>
      </div>
      <div className="discription1">
        <h>- Working with a team to develop a custom mobile application on the ios platform using React and Xcode.</h>
        <h>- Applied various techniques to locate bugs and errors in the application for speedy issue resolution.</h>
        <h>- Unit-tested application code before the final review.</h>
      </div>
      <div className="job2">
        <j>Civic Operations Group - Canvasser</j>
      </div>
      <div className="time2">
        <p>June 2022 - August 2022</p>
      </div>
      <div className="skills2">
        <h>Skills: Customer Service, Communication, Teamwork</h>
      </div>
      <div className="discription2">
        <h>- Interacted with and educated Individuals in communities of Perth Amboy, Carteret, and New Brunswick on weekly coronavirus news and procedures and cautions to take daily.</h>
        <h>- Assisted residents of various communities by educating individuals on the numerous resources the county offers for relief following the coronavirus pandemic.</h>
        <h>- Increased team efficiency by frequently communicating with coworkers about methods to increase efficiency in the field.</h>
        <h>- Traversed door-to-door to sign families up for Covid-19 vaccinations, Covid-19 boosters, and/or Covid-19 tests.</h>
      </div>
      <div className="job3">
        <j>Sayreville Emergency Squad - Emergency Medical Technician</j>
      </div>
      <div className="time3">
        <p>April 2020 - August 2021</p>
      </div>
      <div className="skills3">
        <h>Skills: Teamwork, Leadership, Critical Thinking, Problem Solving</h>
      </div>
      <div className="discription3">
        <h>- Maintained levelheadedness and efficiency in high-pressure situations, effectively prioritizing tasks to save lives and provide medical care.</h>
        <h>- Worked with a team to provide adequate care for patients in emergencies.</h>
        <h>- Developed and maintained rapport with coworkers and local hospital staff to facilitate efficient patient care.</h>
        <h>- Conducted equipment and vehicle checks to maintain continuous and safe operation.</h>
        <h>- Evaluated patient vital signs and status to determine care needs using medical equipment.</h>
      </div>
    </div>
  </div>
  );
};
  
export default Resume;