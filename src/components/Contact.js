import React from 'react'
import '../style/Contact.css'

function Contact() {
  return (
    <div className='Contact' id='scrl'> 
    <div className='cont'>
    <div className='map'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.026363552285!2d10.175230376453326!3d36.817888166701174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3487a504cfb5%3A0x3675676cd288a8ad!2sATLAX!5e0!3m2!1sfr!2stn!4v1689512137153!5m2!1sfr!2stn" width="600" height="450" style={{ border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='f'>
      <form>
      <p>Email :<textarea  rows="3" cols="100" placeholder="         
          YOUR EMAIL: FOULEN@gmail.com"></textarea></p>
      <p>Contact :<textarea  rows="10" cols="100"placeholder="        
      YOUR FEEDBACK HERE"></textarea></p>
      <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  </div></div>
  )
}

export default Contact