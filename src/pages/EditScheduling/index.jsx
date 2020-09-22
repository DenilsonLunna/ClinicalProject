import React, {useState} from 'react';
import Button from '../../components/Button'
import  './styles.css';

function EditScheduling({changePage,schedule}) {

  const [scheduleState, setScheduleState] = useState(schedule)
  
  function updateState(e){
    setScheduleState({
      ...scheduleState, 
      [e.target.name]: e.target.value
    })
  }
  
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
    
    
    fetch(`http://localhost:3333/scheduling/${scheduleState.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(schedule),
    })
    .then(() => { console.log('Successfully');  changePage()})
    .catch((err) => { console.error('Failed', err); });
    
  }
  return (
    <div id='form'>
      <form onSubmit={handleSubmitForm} id='form-content'>
        <strong id='title'>Editar</strong>
       
        <label htmlFor="name">Nome</label>
        <input value={scheduleState?.name} onChange={updateState} type="text" name="name" id="name" />
        <label htmlFor="age">Idade</label>
        <input value={scheduleState?.age} onChange={updateState}   type="number" name="age" id="age"/>
        <label htmlFor="doctor">Doutor</label>
        <input value={scheduleState?.doctor}  onChange={updateState}  type="text" name="doctor" id="doctor"/>
        <label htmlFor="phone">Contato</label>
        <input value={scheduleState?.phone}  onChange={updateState}  type="tel" name="phone" id="phone"/>
        <label htmlFor="symptoms">Sintomas</label>
        <textarea value={scheduleState?.symptoms} onChange={updateState}   type="text" name="symptoms" id="symptoms"/>
        <label htmlFor="date">Data/Hora</label>
        <input value={scheduleState?.date} onChange={updateState}   type="datetime-local" name="date" id="date"/>
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  )
}

export default EditScheduling;