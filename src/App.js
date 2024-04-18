import React from 'react'
import Login from './Pages/Login'
import Quizz from './Components/Quizz'
import Home from './Pages/Home'
import Navbar from './Pages/Common/Navbar'
import Otp from './Components/Otp'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Login/> */}
      {/* <Quizz/> */}
      {/* <Otp/> */}
      <Home/>
     
    </div>
  );
};

export default App;
