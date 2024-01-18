import React from 'react'
import '../style/AboutUs.css'
import img5 from '../images/img5.jpg'

function AboutUs() {
  return (
    <div className='AboutUs' id='scrl3'>
        <div>
            <img id='im5' src={img5} />
            <p id='p5'>About Us</p>
            <p id='p6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam arcu a vestibulum vestibulum. Cras eget sollicitudin mi. Cras tortor mauris, semper ut finibus eget, consequat sit amet ex. Phasellus a sollicitudin mauris, at ultrices magna. Phasellus tristique turpis a mattis sodales. Morbi imperdiet felis at massa hendrerit gravida. Vivamus scelerisque eros vitae rhoncus ornare.Cras ullamcorper accumsan justo, nec accumsan massa tincidunt ac. Aliquam id lobortis turpis. Curabitur vitae sodales tellus. Cras rutrum, augue in imperdiet scelerisque, lectus metus blandit arcu, quis tristique mauris ligula vitae diam. Nunc bibendum tempus massa, sed facilisis lorem. In libero metus, bibendum rutrum purus vel, hendrerit tempus sem. Ut scelerisque facilisis lacus, non viverra lacus cursus eu. Fusce et imperdiet mauris, nec sagittis eros.</p>
        </div>
    </div>
  )
}

export default AboutUs