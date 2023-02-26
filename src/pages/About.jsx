import React from 'react'
import './../styles/About.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div class="pan">
        <div class="x">
            <span><Link to="/">Back</Link></span>
            <p>About Us</p>
        </div>
        <div class="y">
            <div class="z">
                <img src="https://media.licdn.com/dms/image/D5603AQFqp24fl6igZQ/profile-displayphoto-shrink_400_400/0/1675573131194?e=1683158400&v=beta&t=nY-33FB6kMHr8IMl9t0hEDn1xfkQsIhGg8PscymapIg"/>
                <h1>Aidan T. Angel</h1>
            </div>
            <div class="z">
                <img src="https://media.licdn.com/dms/image/D5603AQF32yd6QQQQvA/profile-displayphoto-shrink_400_400/0/1665987748069?e=1683158400&v=beta&t=-SJLa_VXcyBqcmKveeEQiE1rnXr8KvLEcHjgXtfCLOc"/>
                <h1>Bryan Chorbb</h1>
                </div>
            <div class="z">
                <img src="https://media.licdn.com/dms/image/C4E03AQGIs1e-VSjwMA/profile-displayphoto-shrink_800_800/0/1663407955596?e=2147483647&v=beta&t=qI88xib7XdaseOO1zJtpni3r6lPrBm19eQPRlZfcO3I"/>
                <h1>Darren Nguyen</h1>
                </div>
            <div class="z">
                <img src="https://media.licdn.com/dms/image/C5603AQEy0wKo03gFEQ/profile-displayphoto-shrink_400_400/0/1659994357586?e=1683158400&v=beta&t=Zx9xWFL6YN6xzWkD1D0UphLPcLXwmM-4LnH6tgtJUH0"/>
                <h1>Alex Kem</h1>
                </div>
        </div>
        
    </div>
  )
}
