import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './Count';
import { Container } from 'react-bootstrap';

function RenderInentoryArray(start, end) {
  const [availInv, setAvailInv] = useState(null);
  const query = `http://localhost:5050/availableInventory?start=${start}&end=${end}`;
    
  // Query for available inventory
  try {
    useEffect(() => {
        fetch(query)
          .then((resp) => resp.json())
          .then((data) => setAvailInv(data))
    },[]);
  } catch (err) {
    console.log(`error fetching: ${err}`);
  }

  // Construct the table rows
  let tableRows = undefined;
  try {
    if (availInv) {
    tableRows = availInv.inventory.map((item) => {
      return (
        <tr key={item._id}>
          <td>&nbsp;</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>
            <div className='input-group'>
            <input 
              type="number" 
              className='form-control' 
              max={item.count}
              min="0"></input>&nbsp; of {item.count}
              </div>
          </td>
          <td>&nbsp;</td>
        </tr>
        );
      });
    }
  } catch (err) {
    console.log(`error rendering rows: ${err}`);
  }

  // Render the table
  try {
    return (
        <Table hover>
          <tbody>{tableRows}</tbody>
        </Table>
    );
  } catch (err) {
    console.log(`error rendering table: ${err}`);
  }
}

export default function Inventory(props) {
  const reservationDates = props.reservationDates;
  const start = reservationDates.startDate;
  const end = reservationDates.endDate;
  try {
    return(
      <Container>
        <div className='col-1'>&nbsp;</div>
        <div className="col-11input-group mb-3">
          <h3>
            Inventory Available&nbsp;
            {start} to {end}:
          </h3>
          <div className='col'>
            <RenderInentoryArray start={start} end={end} />
          </div>
          <Button className="col">Back</Button>
          <div className='col'>
            <div className='box'>foo</div>
          </div>
          <Button stye="col ">Next</Button>
        </div>
      </Container>
    );
  } catch (err) {
    console.log(err);
  }
}
