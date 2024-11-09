import  hydran from './img/hydran.png';
import bar from './img/bar.gif' ;

import './App.css';
import MyTest from './components/MyTest.jsx';
import MyBTS from './components/MyBTS.jsx';  
import MyBoard from './components/MyBoard.jsx';
import MyStar from './components/MyStar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from  './components/Header.jsx' ;
import Home from  './components/Home.jsx' ;
import Footer from  './components/Footer.jsx' ;


import BComp1 from './components/BComp1.jsx';
import BComp2 from './components/BComp2.jsx';
import BComp3 from './components/BComp3.jsx';

import Parm1 from './components/Param1.jsx';
import Parm2 from './components/Param2.jsx';

function App() {
  var msg = 'msg  test' ; 

  const now = (
    <div>
      날짜 {new Date().toLocaleDateString()}  <br></br> 
      시간 {new Date().toLocaleTimeString()}  <br></br> 
     </div>
  );

  return (
    <div className="App">
     {now} 
     <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/"          element={<Home/>} />
          <Route path="/bcomp1"    element={<BComp1/>} />
          <Route path="/bcomp2"    element={<BComp2/>} />
          <Route path="/bcomp3"    element={<BComp3/>} />
          <Route path="/param/:id"    element={<Parm1/>} />
          <Route path="/param"    element={<Parm2/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
