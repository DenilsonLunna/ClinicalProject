import React, {useState, useEffect} from 'react';
import Button from '../../components/Button'
import Item from '../../components/ItemSchedule'
import './styles.css';

function Scheduling({onClickNewSchedule,  setEditSchedule}) {
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
      {data.map(item =>  (
          <Item 
            item={item} 
            setEditSchedule={setEditSchedule} 
            deleteSchedule={deleteSchedule} 
          />
      ))}
     
        <div id='button-container'>
          <Button onClick={()=>{onClickNewSchedule()}} isBig>Novo Agendamento</Button>
        </div>  
    
     
    </div>
  )
}

export default Scheduling;