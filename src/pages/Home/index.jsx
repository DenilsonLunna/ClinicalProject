import React from 'react';
import Banne from '../../assets/doctor.svg'
import Button from '../../components/Button'
import './styles.css';

function Home({changeScreen}) {
  return (
    <>
      <img className='banner' id='banner' src={Banne} alt="banner"/>
      <Button isBig onClick={changeScreen} >Agendamentos</Button>
    </>
      
    );
}

export default Home;