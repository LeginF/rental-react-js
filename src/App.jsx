import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import GetDates  from './GetDates';
import Inventory from './Inventory';

function App() {
  const [reservationDates, setReservationDates] = useState(null);

  return (
    <>
    { !reservationDates && <GetDates setDates={setReservationDates} /> }
    { (reservationDates) && <Inventory reservationDates={reservationDates} /> }
    </>
  )
}

export default App
