import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
<Navbar/>

    
    <section className="page-section">
        <h1>Contact Us</h1>
        <p>Have questions? Get in touch with us!</p>

        <div className="contact-info">
            <p><strong>Email:</strong> info@digitalpathshala.com</p>
            <p><strong>Phone:</strong> +977-9800000000</p>
            <p><strong>Location:</strong> Kathmandu, Nepal</p>
        </div>

        <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <p>© 2026 Digital Pathshala | All Rights Reserved</p>
    </footer>

    </div>
  )
}

export default Contact