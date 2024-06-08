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
      <form class="row g-3">
        <div className="col-12">Rental Dates:</div>
        <div className="col-md-6">
          <label htmlFor="startDate" className="form-label">Pickup</label>
          <input type="date" className="form-control" id="startDate" onInput={handleStartDateChanged}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="endDate" className="form-label">Return</label>
          <input type="date" id="endDate" className="form-control" onInput={handleEndDateChanged}/>
        </div>
        <div clasName="col-12">
          <Button onClick={onNextClicked} >Next</Button>
        </div>
      </form>
  );
}

