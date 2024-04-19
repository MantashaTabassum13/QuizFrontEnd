import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Otp from './Components/Otp';
import Login from './Pages/Login';
import Quizz from './Pages/Quizz';
import { useState } from 'react';
import PrivateRoutes from './PrivateRoutes';
import QuizzPhy from './Pages/QuizzPhy';
import QuizzChem from './Pages/QuizzChem';
import QuizzM from './Pages/QuizzM';
import Cards from './Components/Cards';



function App() {
  const [value, setValue] = useState(false)

    // useEffect(() => {
    //     // Redirect to the home page when the app is refreshed
    //     window.location.href = '/';
    // }, []);

  return (

    <Routes>
      <Route element={<PrivateRoutes value={value} />}>
        <Route path="/" exact element={<Home />} />
      </Route>
      <Route path="/signup" element={<Login />} />
      <Route path="/otp" element={<Otp setValue={setValue} />} />
      <Route path='/q1' element={<Quizz />} />
      <Route path='/q2' element={<QuizzPhy />} />
      <Route path='/q3' element={<QuizzChem />} />
      <Route path='/q4' element={<QuizzM />} />
      <Route path='/all' element={<Cards/>}/>
      {/* <Redirect to="/" /> */}
    </Routes>
  );
}

export default App;
