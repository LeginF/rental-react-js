import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Count(props) {
  return (
    <>
      <Button>-</Button>
      <input type="number" />
      <Button>+</Button>
    </>
  );
}

export default Count;