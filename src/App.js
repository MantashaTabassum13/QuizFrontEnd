import React from 'react'
import Otp from './Components/Otp'
import Myroutes from './Myroutes'

import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <Myroutes/>
  </Router>
  );
};

export default App;
