import React from 'react'
import Navbar from './Navbar.js'
import '../style/Main.css'
import bg from '../images/image1.jpg'

function Main() {
  return (
    <div className='Main'>
        <Navbar />
        <p id='wwu'>WORK WITH US</p>
        <p id='ww'>Work Comfortably <br></br>in Our Coworking<br></br>Space</p>
        <p id='pr'>Providing you refreshing atmosphere to work<br></br>together outside your usual office setting.<br></br>We are available 24/7 for booking.</p>
        <img src={bg} alt='background'/>
    </div>
  )
}

export default Main