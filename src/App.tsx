import React, { FC } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'

const App: FC = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

export default App
