import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <ul>
            <li><a href="https://beachhacks.com/" target="_blank">Beach Hacks 7.0</a></li>
            <li><a href="https://beachhacks-7-0.devpost.com/" target="_blank">Devpost</a></li>
            <li><span><Link class="abt"to="/about">About Us</Link></span></li>
        </ul>
    </nav>
  )
}
