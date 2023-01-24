import React from 'react';
import { Announcement } from '../Announcement';
import { Navbar } from '../Navbar';
import { Slider } from '../Slider';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  )
}