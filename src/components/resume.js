import React, { useEffect } from 'react';
import './resume.scss';

const Resume = () => {
  const categorizedSkills = {
    Languages: ['JavaScript', 'Java', 'C', 'TypeScript', 'HTML', 'CSS', 'JSON'],
    Frameworks: ['React', 'Angular', 'Node'],
    DeveloperTools: ['MySql', 'XCode', 'VSCode', 'XCode', 'Git', 'Jenkins', 'Bitbucket'],
    Libraries: ['RESTAPIs'],
    SoftSkills: ['Time Management', 'Teamwork', 'Leadership', 'Critical Thinking', 'Adaptability']
  };

  const experiences = [
    {
      title: 'Maverick Software Consulting: Wolter Kluwer - Software Engineer Intern',
      time: 'July 2023 - Current',
      skills: ['Angular', 'TypeScript', 'JSON', 'HTML', 'CSS', 'Jenkins', 'API', 'Git'],
      descriptions: [
        'Developed dynamic and responsive web applications using Angular, Node, HTML, CSS, and TypeScript, showcasing expertise in crafting visually engaging user interfaces that deliver seamless user experiences.',
        'Demonstrated exceptional problem-solving skills and a proactive attitude, adhering to coding standards, version control, and agile development methodologies, delivering quality results within project deadlines.',
        'Integrated APIs to optimize app functionality and improve data interactions for enhanced user experiences.'
      ]
    },
    {
      title: 'Resillence Inc. - App Development Intern',
      time: 'June 2022 - September 2022',
      skills: ['React', 'JavaScript', 'Xcode', 'HTML', 'CSS', 'JSON', 'API'],
      descriptions: [
        'Working with a team to develop a custom mobile application on the iOS platform using React and Xcode.',
        'Applied various techniques to locate over 50 bugs and errors in the application for speedy issue resolution.',
        'Unit-tested application code before the final review to verify the functionality of each part of the application.'
      ]
    },
    {
      title: 'Civic Operations Group - Canvasser',
      time: 'June 2022 - August 2022',
      skills: ['Customer Service', 'Communication', 'Teamwork'],
      descriptions: [
        'Interacted with and comprehensively educated individuals in the communities of Perth Amboy, Carteret, and New Brunswick on weekly coronavirus news, daily procedures, and essential safety precautions.',
        'Assisted residents of various communities by diligently educating individuals on the numerous vital resources the county generously offers for comprehensive relief following the coronavirus pandemic.',
        'Increased team efficiency by communicating with coworkers about methods to enhance efficiency in the field.',
        'Traversed door-to-door to sign families up for Covid-19 vaccinations, Covid-19 boosters, and/or Covid-19 tests.'
      ]
    },
    {
      title: 'Sayreville Emergency Squad - Emergency Medical Technician',
      time: 'April 2020 - August 2021',
      skills: ['Teamwork', 'Leadership', 'Critical Thinking', 'Problem Solving', 'Organization'],
      descriptions: [
        'Maintained levelheadedness and efficiency in high-pressure situations as team leader to provide medical care.',
        'Collaborated efficiently with a diverse medical team, consistently ensuring optimal emergency patient care.',
        'Developed and maintained rapport with coworkers and local hospital staff to facilitate efficient patient care.',
        'Conducted thorough equipment and vehicle checks, guaranteeing continuous safe, reliable operation.',
        'Evaluated patient vital signs, status, and utilized medical equipment to determine precise care needs.',
      ]
    },
  ];



  return (
    <div className="container skills-page">
      <header className="header">
        <h1>Skills</h1>
      </header>
      
      {Object.entries(categorizedSkills).map(([category, skills]) => (
                <section key={category} className="category-section">
                    <h2 className="category-title">{category}</h2>
                    <div className="skills">
                        {skills.map(skill => (
                            <div className="skill-item" key={skill}>{skill}</div>
                        ))}
                    </div>
                </section>
            ))}
      
      <header className="header">
        <h1>Work and Volunteer Experiences</h1>
      </header>
      
      <section className="experiences">
        {experiences.map((exp, index) => (
          <article key={index}>
            <h2>{exp.title}</h2>
            <time>{exp.time}</time>
            <h3>Skills: {exp.skills.join(', ')}</h3>
            <ul>
              {exp.descriptions.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Resume;