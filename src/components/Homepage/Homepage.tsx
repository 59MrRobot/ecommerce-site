import React from 'react';
import { Categories } from '../Categories';
import './Homepage.scss';

export const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Categories />

      <div className="homepage__wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo-1.png`}
          alt="logo"
          className="homepage__logo"
        />

        <div className="homepage__text">
          <p>An e-commerce pet project that I built using the Asos API.</p>
          <p>Technologies used: React, TypeScript, React Router.</p>
        </div>

        <p>
          {`Built by `}
          <a 
            href="https://github.com/59MrRobot" 
            target="_blank"
            rel="noreferrer"
            className="homepage__link"
          >
            Swazi Kunene
          </a>
        </p>
      </div>
    </div>
  )
}
