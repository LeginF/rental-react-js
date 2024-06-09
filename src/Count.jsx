import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Count(props) {
  return (
    <div className='col'>
      <input 
        type="number"  
        className='form-control'  
        min="0"
        max={props.max}
        value="0"
        step="1"/>
    </div>
  );
}

export default Count;