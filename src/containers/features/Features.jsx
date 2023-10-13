import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'PROGRAMMING (Visual Basic programming)',
    text: 'January 2019 – November 2019 (11 months)Mombasa Baptist, Tudor, Mombasa, Kenya'
  },
  {
    title: 'COURSERA (HTML,CSS & Javascript Programming)',
    text: 'January 2020 – November 2021 (11 months), online',
  },
  {
    title: 'GRASSHOPPER: LEARN HOW TO CODE (Java, Python & React.js)',
    text: 'December 2020 – February 2021 (3 months), online',
  },
  {
    title: 'CODING WITH C#, C++, HTML, JAVASCRIPT & IT CONCEPTS',
    text: 'February 2021 – April 2023 (2 months)Mount Kenya University, Mombasa Kenya',
  },
  {
    title: 'ALX (Software Engineering, Python & PHP)',
    text: 'January 2023 till present, online',
  },
  {
    title: 'ICTA (Designing, ASP.NET, Hosting, Networking)',
    text: 'June 2023 – September 2023 (4 months)Mombasa, Kenya',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Portfolio</h1>
      
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
