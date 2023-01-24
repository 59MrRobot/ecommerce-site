import React from 'react';
import { Announcement } from '../Announcement';
import { Categories } from '../Categories';
import { Navbar } from '../Navbar';
import { Slider } from '../Slider';
import './Home.scss';

export const Home: React.FC = React.memo(
  () => {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
      </div>
    )
  }
)