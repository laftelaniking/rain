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

  const [fruitList, setFruitList] = useState(["딸기", "사과", "망고", "포도"]);
  const [fruit, setFruit] = useState("");

  const onChange = (e)=>{
    console.log(e.target.value);
    setFruit(e.target.value);
  }

  const onMyPress=(e)=>{
    if(e.key ==='Enter'){goAppend();}
  }

  const goAppend=()=>{
    setFruitList(fruitList.concat(fruit));  //concat는 append기능을 하는 메서드
    setFruit("");   //초기화
    alert('이거 잘됨 ㅋㅋ')
    console.log(fruitList);
  }

  const now = (
    <div>
      날짜 {new Date().toLocaleDateString()}  <br></br> 
      시간 {new Date().toLocaleTimeString()}  <br></br> 
     </div>
  );

  
//여기부터 return은 index.html에 뿌려주는 것
  return (
    <div className="App">
     {now} <p></p> <br></br>

     <h3>과일목록</h3>
      <table>
          <tbody>
          {//map은 for문 역할을 한다
              fruitList.map((item, i)=>{
                return (
                  <tr key={i}> <td>{i+1} 번째 {item}</td> </tr>
                );
              })  
          }
          </tbody>
      </table>

      <hr />
      과일 입력 : <input type="text" onChange={onChange} onKeyDown={onMyPress} value={fruit} />
      <button type="button" onClick={goAppend}>추가하기</button>

    </div>
  );
}
export default App;
