import React from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'
export default function Header() {
  return (
    <div className='container'>
        <div>
            <img height={50} src={logo}  alt='logo' />

        </div>

        <div className='list'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>

    </div>
  )
}
