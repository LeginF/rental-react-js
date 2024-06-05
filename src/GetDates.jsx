import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function GetDates(props) {
  const setDates = props.setDates;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  function onNextClicked() {
    const currentDate = new Date();
    if (!startDate) {
      alert('Rental start date is required.');
    } else if (!endDate) {
      alert('Rental end date is required.');
    } else if (new Date(startDate) < currentDate) {
      alert('Rental start date must be in the future.');
    } else if (endDate < startDate) {
      alert('Rental start date must be before the end date.');
    } else {
      setDates({
         startDate: startDate,
         endDate: endDate,
      });
    }
  }

  function handleStartDateChanged(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChanged(e) {
    setEndDate(e.target.value);
  }

  return (
      <form>
            <h2>Rental Dates:</h2>
            <div class="input-group">
            <h3>Pickup Date&nbsp;</h3>
            <input type="date" id="startDate" onInput={handleStartDateChanged}/>
            </div>
            <div class="input-group">
            <h3>Return Date&nbsp;</h3>
            <input type="date" id="endDate" onInput={handleEndDateChanged}/>
            </div>
            <Button onClick={onNextClicked} >Next</Button>
      </form>
  );
}

