import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React app to Leave Feedback for products</p>
            <p>By: Zoraiz Bin Zahid</p>
            <p>Contact: zoraizbinzahid@gmail.com</p>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About