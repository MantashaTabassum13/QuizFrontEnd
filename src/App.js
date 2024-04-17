import React from 'react'
import Login from './Pages/Login'
import Quizz from './Components/Quizz'
import Main from './Components/Main'
import Home from './Pages/Home'
import Navbar from './Pages/Common/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Login/>
      <Quizz/> */}
      <Home/>
     
    </div>
  )
}

export default App
