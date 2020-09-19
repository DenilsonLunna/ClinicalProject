import React, {useState, useEffect} from 'react';
import { MdDateRange, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Button from '../../components/Button'

import './styles.css';

function Scheduling({onClickNewSchedule, showEditSchedule, setEditSchedule}) {
  const [data, setData]=useState([])

  useEffect(()=>{
    // link https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
    fetch('http://localhost:3333/scheduling',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {response.json().then(data =>  setData(data)) })
    .catch((err) => { console.error('Failed to send token', err); });
  }, [])

  function deleteSchedule(id){
    console.log(id)
    fetch(`http://localhost:3333/scheduling/${id}`,
    {
      method: 'DELETE',
    })
    .then(() => {
      setData(
        data.filter(item=> item.id !== id)
      ) 
    })
    .catch((err) => {alert("Erro ao deletar agendamento")});
  }


  return (
    <div id='container-table'>
      {data.map(item => {
        const dateString = new Date(item.date).toLocaleString('pt-Br',  {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute:'2-digit',
      })
        return (
          <div key={String(item.id)} id="row-schedule">
            <div id="schedule">
              <strong id="name-client">Nome:{item.name}</strong>
              
              <span id="date-schedule"><MdDateRange/>{dateString}</span>
            </div>
            <div id='options-date'>
              <button onClick={()=>showEditSchedule(item)} ><BsEyeFill size={20}/></button>
              <button onClick={()=>setEditSchedule(item)}><FaEdit size={20}/></button>
              <button onClick={() => deleteSchedule(item.id)}><MdDelete size={20}/></button>
            </div>
          </div>
        )
      })}
      {data.length>0 &&  ( 
        <div id='button-container'>
          <Button onClick={()=>{onClickNewSchedule()}} isBig>Novo Agendamento</Button>
        </div>  
      )}
     
    </div>
  )
}

export default Scheduling;