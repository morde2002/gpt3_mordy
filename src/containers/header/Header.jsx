import React from 'react';
import people from '../../assets/people.png';
import me from '../../assets/me3demo.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hi I&apos;m Mordecai</h1>
      <p>A dedicated web developer with a passion for crafting immersive digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in creating visually appealing, user-friendly websites and web applications. My commitment to innovation and attention to detail drives me to deliver high-quality solutions that leave a lasting impression</p>

      <div className="gpt3__header-content__input">
        <button type="button">Contact Me</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>With 1,600+ followers</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={me} />
    </div>
  </div>
);

export default Header;
