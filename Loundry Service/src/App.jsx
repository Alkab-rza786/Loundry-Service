import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Booking from './Components/Booking/Booking'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'

function App() {

  // const [bookingForm, setBookingForm] = useState(false);
  // const toggleForm = () => {
  //   setBookingForm(prevbookingForm => !prevbookingForm)
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleSubmit = (formData) => {
    console.log('Form Data Submitted:', formData);
    // Handle form data submission
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle=' What we Offfer' title='Our Services' />
        <Program />
        <About />
        <Title subTitle='Pickup & Deliver' title='How We works' />
        <Booking toggleForm={toggleForm} />
        {showForm && <Form toggleForm={toggleForm} onSubmit={handleSubmit} />}
        <Title subTitle='Contact us' title='Get in Touch' />
        <Contact />
        <Footer />


      </div>
    </div>
  )
}

export default App
