import React from 'react';
import { MdDateRange, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Button from '../../components/Button'

import './styles.css';

function Scheduling() {
  return (
    <div id='container-table'>
      <div id="row-schedule">
        <div id="schedule">
          <strong id="name-client">Name</strong>
          <span id="date-schedule"><MdDateRange/> 10/05/2020 - 15:30</span>
        </div>
        <div id='options-date'>
          <button><BsEyeFill size={20}/></button>
          <button><FaEdit size={20}/></button>
          <button><MdDelete size={20}/></button>
        </div>
      </div>
      <div id='button-container'>
       <Button isBig>Novo Agendamento</Button>
      </div>
    </div>
  )
}

export default Scheduling;