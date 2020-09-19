import React from 'react';
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'

import Scheduling from './pages/Scheduling'
import NewScheduling from './pages/NewScheduling'
import EditScheduling from './pages/EditScheduling'

function App() {
  return (
    <Container>
      <Header/>
      <div style={{
        width:'100%', 
        display:'flex', 
        alignItems:'center',
        justifyContent:'center'  
      }} id="table">
       {/* <Scheduling/> */}
       {/* <NewScheduling/> */}
       <EditScheduling name='denison'/>
      </div>
     
      <Footer/>
      
    </Container>
  );
}

export default App;
