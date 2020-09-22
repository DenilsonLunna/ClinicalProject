import React, {useState} from "react"
import { MdDateRange, MdDelete} from "react-icons/md";
import { FaEdit,FaWhatsapp } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";


const ItemSchedule = ({item, setEditSchedule, deleteSchedule }) => {

    const [visible, setVisible] = useState(false);
    const dateString = new Date(item.date).toLocaleString('pt-Br',  {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute:'2-digit',
    })
    return(
        <div key={String(item.id)} id="row-schedule">
            <div id="schedule">
              <strong id="name-client"><b>Nome: </b> {item.name}</strong>
              {visible && (
                  <>
                    <span id="age"><b>Idade: </b>{item.age}</span>
                    <span id="doctor"><b>Doctor: </b>{item.doctor}</span>
                        <span id="phone"><b>Contato: </b> <FaWhatsapp/> 
                            <a href={`https://api.whatsapp.com/send?phone=55${item.phone}&text=Olá, só confirmando a consulta para hoje`} target="_blank" rel="noopener noreferrer">
                                {item.phone}
                            </a>
                        </span>
                    <span id="symptoms"><b>Sintomas: </b>{item.symptoms}</span>
                  </>
    
              )}
              <span id="date-schedule"><b>Data/Hora: </b><MdDateRange/>{dateString}</span>
            </div>
            <div id='options-date'>
              <button onClick={()=>setVisible(old=>!old)} ><BsEyeFill size={20}/></button>
              <button onClick={()=>setEditSchedule(item)}><FaEdit size={20}/></button>
              <button onClick={() => deleteSchedule(item.id)}><MdDelete size={20}/></button>
            </div>
        </div>
    )
}

export default ItemSchedule;