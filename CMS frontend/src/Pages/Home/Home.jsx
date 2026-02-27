//rafce auto imports all this code snippet
import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Button from '../../Components/Button/Button'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Button/>

    <section className  ="hero">
        <h1>Empowering Education Digitally</h1>
        <p>Learn anytime, anywhere with high-quality digital courses and expert guidance.</p>
        <button>Explore Courses</button>
    </section>

    <section className="features">
        <div className  ="card">
            <h3>📚 Quality Courses</h3>
            <p>Well-structured and practical learning materials.</p>
        </div>

        <div className="card">
            <h3>👨‍🏫 Expert Mentors</h3>
            <p>Learn from experienced and professional instructors.</p>
        </div>

        <div className="card">
            <h3>💻 Flexible Learning</h3>
            <p>Study at your own pace from anywhere.</p>
        </div>
    </section>

    <footer>
        <p>© 2026 Digital Pathshala | All Rights Reserved</p>
    </footer>
    </div>

  )
}

export default Home