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

import Hello from './components/Hello.jsx';

import { useState } from 'react';

function App() {
  var msg = 'msg  test' ; 

  const now = (
    <div>
      날짜 {new Date().toLocaleDateString()}  <br></br> 
      시간 {new Date().toLocaleTimeString()}  <br></br> 
     </div>
  );

  const [fruitList, setFruitList] = useState(["딸기", "사과", "망고", "포도"]);
  const [fruit, setFruit] = useState("");
  const onChange=(e)=>{
    console.log( e.target.value);
    setFruit(e.target.value);
  }

  const goAppend=()=>{
    setFruitList( fruitList.concat( fruit )); //push 안먹음  
    setFruit("");
    console.log( fruitList );
  }


  return (
    <div className="App">
     {now} <p></p> <br></br>

     <h3>과일목록</h3>
      <table>
          <tbody>
          {
              fruitList.map( (item, i)=>{
                  return (
                      <tr key={i}><td> {i} 번째 {item}</td></tr>
                  );
              })
          }
          </tbody>
      </table>

      <hr />
      과일 입력 : <input type="text" onChange={onChange} value={fruit} />
      <button type="button" onClick={goAppend}>추가하기</button>

    </div>
  );
}
export default App;
