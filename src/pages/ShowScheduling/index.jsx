import React from 'react';
import Button from '../../components/Button'
import  './styles.css';

function EditScheduling({changePage=()=>alert('Trocar a pagina'),schedule }) {

  
  return (
    <div id='form'>
      <form  id='form-content'>
        <strong id='title'>Agendamento</strong>
       
        <label htmlFor="name">Nome</label>
        <input readOnly contentEditable={false} value={schedule?.name} type="text" name="name" id="name" />
        <label htmlFor="age">Idade</label>
        <input readOnly value={schedule?.age}   type="number" name="age" id="age"/>
        <label htmlFor="doctor">Doutor</label>
        <input readOnly value={schedule?.doctor}   type="text" name="doctor" id="doctor"/>
        <label htmlFor="phone">Contato</label>
        <input readOnly value={schedule?.phone}   type="tel" name="phone" id="phone"/>
        <label htmlFor="symptoms">Sintomas</label>
        <textarea readOnly value={schedule?.symptoms}   type="text" name="symptoms" id="symptoms"/>
        <label htmlFor="date">Data/Hora</label>
        <input readOnly value={schedule?.date}   type="datetime-local" name="date" id="date"/>
        <Button onClick={()=> changePage()}>Editar</Button>
      </form>
    </div>
  )
}

export default EditScheduling;