import React from 'react';
import Banne from '../../assets/doctor.svg'
import './styles.css';

function Home() {
  return (
      <img className='banner'   id='banner' src={Banne} alt="banner"/>
    );
}

export default Home;