import React, { useState } from 'react';
import './Form.css';
import cross from '../../assets/cross.png';

function Form({ toggleForm, onSubmit }) {


    return (
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <h1>Laundry Pickup Request Form <span><img src={cross} alt="Close" onClick={toggleForm} /></span></h1>
                <hr className='line' />
                <p>Our customer service representative will contact you within one (1) hour from the time of your submission for order confirmation</p>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder='Enter your full name' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mobile No:</label>
                    <input type="text" placeholder='Phone no' name='mobile' id='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>E-mail:</label>
                    <input type="email" placeholder='ex:myname@example.com' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Hostel (Boys or Girls):</label>
                    <input type="text" placeholder='Boys or Girls' name='hostel' id='hostel' value={hostel} onChange={(e) => setHostel(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Hostel No.:</label>
                    <input type="text" placeholder='Type here' name='hostelNo' id='hostelNo' value={hostelNo} onChange={(e) => setHostelNo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Select your pickup date:</label>
                    <input type="date" name='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Select your preferred time for pickup:</label>
                    <input type="text" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Select type of services:</label>
                    <select name="service" id="service" value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="normal">Normal Wash</option>
                        <option value="fold">Fold and Package only</option>
                        <option value="hand">Hand wash</option>
                        <option value="iron">Iron & fold</option>
                        <option value="dry">Dry Cleaning</option>
                        <option value="others">Other Services</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Instructions for other services:</label>
                    <textarea name="instruction" id="instruction" rows={6} value={instruction} onChange={(e) => setInstruction(e.target.value)}></textarea>
                </div>

                <button className='form-btn' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
