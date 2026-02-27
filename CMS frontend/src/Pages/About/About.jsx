import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>

      <section className="page-section">
        <h1>About Digital Pathshala</h1>
        <p>
          Digital Pathshala is an online learning platform dedicated to
          providing quality digital education to students everywhere.
        </p>

        <h3>Our Mission</h3>
        <p>
          To make learning accessible, affordable, and flexible through
          modern digital technology.
        </p>

        <h3>Our Vision</h3>
        <p>
          To become a leading digital education platform empowering students
          with practical knowledge and real-world skills.
        </p>
      </section>

      <footer>
        <p>© 2026 Digital Pathshala | All Rights Reserved</p>
      </footer>
    </div>
      
  )
}

export default About