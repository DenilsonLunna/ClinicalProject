import React from 'react';
import Button from '../../components/Button'
import  './styles.css';

function NewScheduling() {
  function handleSubmitForm(e){
    e.preventDefault()
    const schedule = {
      name: e.target.name.value,
      age: e.target.age.value,
      doctor: e.target.doctor.value,
      phone: e.target.phone.value,
      symptoms: e.target.symptoms.value,
      date: e.target.date.value,
     
    }
    
    console.log(schedule);
    fetch('http://localhost:3333/scheduling',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(schedule),
    })
    .then(() => { console.log('Successfully sent token'); })
    .catch((err) => { console.error('Failed to send token', err); });
    
  }
  return (
    <div id='form'>
      <form onSubmit={handleSubmitForm} id='form-content'>
        <strong id='title'>Criar</strong>
       
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Idade</label>
        <input type="number" name="age" id="age"/>
        <label htmlFor="doctor">Doutor</label>
        <input type="text" name="doctor" id="doctor"/>
        <label htmlFor="phone">Contato</label>
        <input type="tel" name="phone" id="phone"/>
        <label htmlFor="symptoms">Sintomas</label>
        <textarea type="text" name="symptoms" id="symptoms"/>
        <label htmlFor="date">Data/Hora</label>
        <input type="datetime-local" name="date" id="date"/>
        <Button type="submit">Agendar</Button>
      </form>
    </div>
  )
}

export default NewScheduling;