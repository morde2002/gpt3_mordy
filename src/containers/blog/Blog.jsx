import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">My Projects</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={portfolio3} date="Sep 9, 2023" text="Xelerated Tech inc website" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={portfolio1} date="Sep 29, 2023" text="Hisia Youth Guiding and Counselling C.B.O website" />
        <Article imgUrl={portfolio4} date="Oct 11, 2023" text="My other Portfolio website" />
        <Article imgUrl={portfolio2} date="Aug 23, 2023" text="Baraka Mining & Minerals LTD website -> https://barakaminingltd.co.ke" />
        <Article imgUrl={portfolio5} date="Oct 01, 2023" text="Other Portfolio"  />
      </div>
    </div>
  </div>
);

export default Blog;
