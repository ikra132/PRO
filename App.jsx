import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import JobPosting  from './pages/JObPosting'
import Job from './pages/Job'
import Accepted from './pages/Accepted'
import Notaccepted from './pages/Notaccepted'
import Accepted2 from './pages/Accepted2'
import Test from './pages/Test'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          
          <Route path='/JobPosting' element={<JobPosting/>}/>
          <Route path='/Job' element={<Job/>}/>
          <Route path='/accepted' element={<Accepted/>}/>
          <Route path='/Notaccepted' element={<Notaccepted/>}/>
          <Route path='/accepted2' element={<Accepted2/>}/>
          <Route path='/Test' element={<Test/>}/>
         
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App 