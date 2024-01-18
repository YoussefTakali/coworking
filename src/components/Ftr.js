import React from 'react'
import '../style/Ftr.css'
import facebook from "../images/fb.png"
import twitter from "../images/twter.png"
import instagram from "../images/insta.png"

function Ftr() {
  return (
    <div id='srcl3'>
        <div className='aaa'> 
            <p>Description</p>
            <p>s made by Namiq Namaz. This is a basic footer template that <br></br>holds lots of links. This is very helpful to win a second chance<br></br> to let the visitors see</p>
        </div>
        <div className='aaa'>
            <p>Contact</p>
            <p>1002 Rue De L'Argentine, Tunis</p>
            <p>+216 31 301 350</p>
            <p>atlax@gmail.com</p>
        </div>
        <div className='aaa' id='follow'>
            <p>Follow Us!</p>
            <div id='icons'>
            <img src={facebook} alt='facebook' className='aa'/>
            <img src={twitter} alt='twitter' className='aa'/>
            <img src={instagram} alt='instagram' className='aa'/>
            </div>
        </div>
    </div>
  )
}

export default Ftr