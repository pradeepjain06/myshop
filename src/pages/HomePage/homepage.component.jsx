import React from 'react';
import MenuItem from '../../components/MenuItem/menu-item.component';
import Directory from '../../components/Directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

export default HomePage;
