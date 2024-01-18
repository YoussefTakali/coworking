import React from 'react'
import '../style/Services.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

function Services() {
  return (
    <div className='container' id='scrl1'>
    <div className='Service'>
        <p id='abt'>SERVICES</p>
        <p id='aa'>What We <br></br>Offer For You</p>
        <img id='im1' src={img1}/>
        <p id='p1'>High-end Computer Experience</p>
    </div>
    <div className='item2'>
        <img id='im2' src={img2}/>
        <p id='p2'>Free Drinks and Coffee Breaks</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <img id='im3' src={img3}/>
        <p id='p2'>Break Rooms</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
    </div>
    <div className='item3'>
        <img id='im4' src={img4}/>
        <p id='p3'>Comfortable Working situation</p>
        <p id='p19'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
    </div>
    </div>
  )
}

export default Services