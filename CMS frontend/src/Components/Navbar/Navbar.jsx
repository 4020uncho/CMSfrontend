import React from 'react'

const Navbar = () => {
  return (
    <div>
         <header>
        <nav className="navbar">
            <h2 className="logo">Digital Pathshala</h2>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Navbar