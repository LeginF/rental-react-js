import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import GetDates  from './GetDates';
import Inventory from './Inventory';

function App() {
  const [reservationDates, setReservationDates] = useState(null);
  const [selections, setSelections] = useState(new Map());

  return (
    <>
    { !reservationDates && <GetDates setDates={setReservationDates} /> }
    { (reservationDates) 
      && <Inventory reservationDates={reservationDates} selections={selections}/> }
    </>
  )
}

export default App
