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
import Jeju from './components/Jeju.jsx';
import Wrapper from './components/Wrapper.jsx';

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

  const tripPlace = [
    {
      place: "Jeju",
      image: "images/main_4.jpg",
      rating:4.9,
    },
    {
      place: "London",
      // image: "https://a.cdn-hotels.com/gdcs/production68/d1303/c8fa75d8-6932-459b-9660-8340f097ebd7.jpg",
      image: "images/img_snow_wide.jpg",
      rating:2.1,
    },
    {
      place: "America",
      image: "https://image.theminda.com/data/tg/image/item/high/201906/a6f59222e5a21779ec7522ceb6e09319.jpg",
      rating:5,
    },
  ];

//여기부터 return은 index.html에 뿌려주는 것
  return (
    <div className="App">
      <Wrapper>
      {now} <p></p> <br></br>
      {tripPlace.map((country) => ( <Jeju  place={country.place}  picture={country.image}  rating={country.rating}  /> ))}
      <hr />
      
      </Wrapper>
    </div>
  );
}
export default App;
