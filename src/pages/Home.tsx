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
    <div>Keikaku</div>
  )
}

export default Home