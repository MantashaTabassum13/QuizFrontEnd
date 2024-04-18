import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Otp from './Components/Otp';
import Login from './Pages/Login';
import Quizz from './Pages/Quizz';
import { useState } from 'react';
import PrivateRoutes from './PrivateRoutes';


function App() {
  const [value, setValue] = useState(false)

  return (

    <Routes>
      <Route element={<PrivateRoutes value={value} />}>
        <Route path="/" element={<Home />} exact />
      </Route>
      <Route path="/signup" element={<Login />} />
      <Route path="/otp" element={<Otp setValue={setValue} />} />
      <Route path='q1' element={<Quizz />} />
    </Routes>
  );
}

export default App;
