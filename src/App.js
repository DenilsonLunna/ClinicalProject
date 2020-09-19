import React, {useState} from 'react';
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'

import Scheduling from './pages/Scheduling'
import NewScheduling from './pages/NewScheduling'
import EditScheduling from './pages/EditScheduling'
import ShowScheduling from './pages/ShowScheduling'
import Home from './pages/Home'

function App() {
  const [page, setPage]= useState('home')
  const [editableSchedule, setEditableSchedule]= useState(null)


  return (
     
    <Container>
      <Header
        onClickHome={()=>setPage('home')}
        onClickSchedule={()=>setPage('schedules')}
      />
     
      <div style={{
        width:'100%', 
        display:'flex', 
        flex:1,
        height:'100%',
        alignItems:'center',
        justifyContent:'center'  
      }} id="table">
       {page === 'schedules'?
        <Scheduling  
          showEditSchedule={(item)=>{
            setEditableSchedule(item)
            setPage('showSchedules')
         }} 
          setEditSchedule={(item)=>{
            setEditableSchedule(item)
            setPage('editSchedules')
         }} 
         onClickNewSchedule={() => setPage('newSchedules') }
        /> : null}

       {page === 'home' ? <Home /> :null}
       {page === 'newSchedules' ? <NewScheduling changePage={()=>{
            setEditableSchedule(null)
            setPage('schedules')
          }}/> :null}
       {page === 'editSchedules' && editableSchedule ? 
        <EditScheduling 
         changePage={()=>{
            setEditableSchedule(null)
            setPage('schedules')
          }} 
          schedule={editableSchedule} /> :null}
       {page === 'showSchedules' && editableSchedule ? 
        <ShowScheduling 
         changePage={()=>{
            setPage('editSchedules')
          }} 
          schedule={editableSchedule} /> :null}
      </div>
     
      <Footer/>
      
    </Container>
  );
}

export default App;
