import React, { Component } from 'react'
import '../style/Navbar.css'
import {useRef} from "react"

class Navbar extends Component {
  state = { clicked: false};
  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  render() {
  return (
    <div className='Navbar'>
        <p>A<span>tla</span>x</p>
        <div className='links' >
            <ul id="nav" className={this.state.clicked ? "#nav active":"#nav"}>
                <li><a href='#'>Home</a></li>
                <li><a href='#scrl3'>About Us</a></li>
                <li><a href='#scrl1'>Services</a></li>
                <li><a href='#scrl'>Contact</a></li>
            </ul>
        </div>
        <div className='mobile' onClick={this.handleClick}>
        <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    </div>
  )
}
}
export default Navbar