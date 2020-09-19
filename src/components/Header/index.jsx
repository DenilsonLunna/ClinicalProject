import React from 'react';
import Button from '../Button'
import './styles.css';

function Header({onClickHome,onClickSchedule}) {
  return (
    <div id='header'>
      <img 
        src="https://th.bing.com/th/id/OIP.T2AwX0iwHgXba1MIOr9x3QHaIu?w=150&h=180&c=7&o=5&pid=1.7" 
        alt="logo" 
        id="logo"
      />
      <div id="content-header">
        <Button onClick={onClickHome} isText={true}>Inicio</Button>
        <Button onClick={onClickSchedule} >Agendamento</Button>
      </div>
    </div>

  
  )
}


export default Header;