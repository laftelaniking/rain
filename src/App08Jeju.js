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

import {useState} from 'react'; 
import Wrapper  from './components/Wrapper'; 

import Jeju from './components/Jeju.jsx';

function App() {
  var msg = 'App.js 시작문서' ; 

  const now = (
    <div>
      날짜 {new Date().toLocaleDateString()}  <br></br> 
      시간 {new Date().toLocaleTimeString()}  <br></br> 
     </div>
  );

  const tripPlace = [
    {
      place: "Jeju",
      image: "https://cdn.crowdpic.net/list-thumb/thumb_l_319B5AA716BAB8C7AACB2D52875E6DD4.jpg",
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
 
  return (
    <div className="App">
      <b style={{fontSize:'10pt', color:'blue'}}> {msg} </b> <br></br>
      {now}  <p></p> <br></br>
  
      {tripPlace.map((country) => ( <Jeju  place={country.place}  picture={country.image}  rating={country.rating}  /> ))}

     
    </div>
  );
}
export default App;
