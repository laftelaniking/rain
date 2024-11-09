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

import  {useState, useEffect} from 'react';
import Jeju from './components/Jeju.jsx';
import Wrapper from './components/Wrapper.jsx';
import MyAppend from './components/MyAppend.jsx';
import HeroList from './components/HeroList.jsx';

function App() {

  var msg = 'msg  test' ; 

  const now = (
    <div>
      날짜 {new Date().toLocaleDateString()}  <br></br> 
      시간 {new Date().toLocaleTimeString()}  <br></br> 
     </div>
  );

  // useEffect()연결해서 사용
  const [heroState, setHeroState] = useState(  [ {"code":"1", "name":"일일", "memo":"에이콘"} ]);
  const [code, setCode] = useState(7);
  const [name, setName] = useState("칠칠");
  const [memo, setMemo] = useState("메모");

  useEffect(()=>{
     setHeroState( heroState.concat( 
       {"code":"2", "name":"투투", "memo":"케이티"} ,
       {"code":"3", "name":"쓰쓰", "memo":"엘쥐"}));
  }, []);

  const onChangeCode=(e)=>{
      setCode(e.target.value);
  }

  const onChangeName=(e)=>{
      setName( e.target.value);
    
  }

  const onChangeMemo=(e)=>{
      setMemo( e.target.value );
  }

  
  const onAdd = ()=>{
    setHeroState( heroState.concat({"code":code, "name":name, "memo":memo}) );
    setCode('');
    setName('');
    setMemo('');
  }


//여기부터 return은 index.html에 뿌려주는 것
  return (
    <div className="App">
    <b>App.js </b><br />
    {now}  <p></p> <br></br>
    
    <MyAppend  onAdd={onAdd}   code={code} name={name} memo={memo}
          onChangeCode={onChangeCode} onChangeName={onChangeName} onChangeMemo={onChangeMemo}/>

        <hr />
    <HeroList heroList = {heroState}/>
    <button type='button' onClick={onAdd}>추가하기</button>

    </div>
  );
}
export default App;
