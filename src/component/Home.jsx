import React, { Component } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
        <>
        <div className='container-1'>
        <h1 style={{color:"white"}}>Quiz App</h1>
        <button className='playbutton'><Link to="/quiz">Play</Link></button>
        </div>
        </>
    )
  }
}

export default Home