import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './Count';

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
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.count}</td>
          <td><Count/></td>
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
      <div className="input-group mb-3">
        <h2>
          Inventory Available&nbsp;
          {start} to&nbsp;
          {end}:
        </h2>
        <RenderInentoryArray start={start} end={end} />
        <Button className="ml-auto">Back</Button>
        <Button stye="align:right">Next</Button>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
}
