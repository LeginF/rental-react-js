import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function CustomerInfo(props) {
    return (
        <form className="row g-3">
            <div class="col-1">&nbsp;</div>
            <div class="col-5">
                <label htmlFor="firstName" className="col-2 form-label">First Name</label>
                <input type="text" id="firstName" className="col-2 form-control"></input>
            </div>
            <div class="col-1">&nbsp;</div>
            <div class="col-5">
                <label htmlFor="lastName" className="col-2 form-label">Last Name</label>
                <input type="text" id="lastName" className="col-2 form-control"></input>
            </div>
            <div class="col-1">&nbsp;</div>
            <div class="col-5">
                <label htmlFor="email" className="col-2 form-label">Email Address</label>
                <input type="email" id="email" className="col-2 form-control"></input>
            </div>
            <div class="col-1">&nbsp;</div>
            <div class="col-5">
                <label htmlFor="confirmEmail" className="col-2 form-label">Confirm Email</label>
                <input type="email" id="confirmEmail" className="col-2 form-control"></input>
            </div>
            <div class="col-1">&nbsp;</div>
            <div class="col-5">
                <label htmlFor="phone" className="col-2 form-label">Phone Number</label>
                <input type="tel" id="phone" className="col-2 form-control"></input>
            </div>
            <div class="col-6">&nbsp;</div>
            <div class="col-1">&nbsp;</div>
            <div class="col-2">
                <Button>Back</Button>
            </div>
            <div class="col-7">&nbsp;</div>
            <div class="col-1">
                <Button className='align-self-end'>Next</Button>
            </div>
        </form>
    )
}

export default CustomerInfo;