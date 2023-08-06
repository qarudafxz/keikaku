import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!document.cookie) {
      navigate('/')
    }
  },[])
  return (
    <div>
      <h1>Keikaku | Task Management System</h1>
    </div>
  )
}

export default Home