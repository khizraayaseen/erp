import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="login"><button type="button">Login</button></Link>
    </div>
  )
}

export default Home
