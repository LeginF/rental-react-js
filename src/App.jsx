import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import GetDates  from './GetDates';
import Inventory from './Inventory';
import CustomerInfo from './CustomerInfo'

function App() {
  const [reservationDates, setReservationDates] = useState(null);
  const [selections, setSelections] = useState(new Map());
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
    { (activeSection == 0) 
      && <GetDates setDates={setReservationDates} setActiveSection={setActiveSection}/> }
    { (activeSection == 1) 
      && <Inventory 
        reservationDates={reservationDates} 
        selections={selections}
        setActiveSection={setActiveSection}/> }
    { (activeSection == 2)
      && <CustomerInfo/>}
    </>
  )
}

export default App
