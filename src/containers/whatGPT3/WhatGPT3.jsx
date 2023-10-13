import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Me" text="As dedicated professional deeply immersed in the world of web design, development and programming,I take immense pride in my ability to design visually striking and user-friendly websites. Utilizing my skills in HTML, CSS, JavaScript extending to React.js, Three.js, I create responsive interfaces that ensure seamless navigation and an enjoyable user experience. Additionally, my expertise extends to back-end development, where languages like Python, PHP, and Ruby enable me to build powerful and dynamic web applications. Managing databases and ensuring the smooth functioning of websites are integral parts of my skill set." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">My Skills</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="User Experience Focus" text="User satisfaction is at the core of my design philosophy, guiding every aspect of my work." />
      <Feature title="Innovative Design Skills" text="My designs are innovative, incorporating modern trends and creative elements for a unique user experience." />
      <Feature title="Front-end Expertise" text="Proficient in front-end technologies such as HTML, CSS, and JavaScript, I craft interactive and responsive interfaces." />
      <Feature title="Robust Back-End Development" text="Experienced in back-end languages like Python, PHP, and Ruby, I develop powerful and dynamic websites." />
    </div>
  </div>
);

export default WhatGPT3;
