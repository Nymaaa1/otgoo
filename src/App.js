import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
// import Navbar from './Components/Navbar';
import Main from './pages/main.jsx'; 
import Main2 from './pages/main2.jsx';
import Main3 from './pages/main3.jsx';
import Main4 from './pages/main4.jsx';
import Main5 from './pages/main5.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/" element={<Order/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/main2" element={< Main2/>}/>
        <Route path="/main3" element={< Main3 />}/>
        <Route path="/main4" element={< Main4/>}/>
        <Route path="/main5" element={< Main5/>}/>

      </Routes>   
    </Router>
  );
};

export default App;
