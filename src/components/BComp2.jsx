import React, { useState } from 'react';

const BComp2 = () => {
    const [ message, setMessage ] = useState('');
    const hello = () => {setMessage("안녕하세요")}  ;


    const [ info, setInfo ] = useState("");
    const textInput = (e) => {
        const value = e.target.value;
        // const name = e.target.name;
        // console.log(`name : ${name}, value : ${value}`);
        setInfo(value)
    };



    return (
        <div>
            BComp2.jsx 문서  {message}   <br />
            <button onClick={hello}>인사메세지버튼</button>
            <p></p>

            <p>입력값 : {info}</p>
            <input type="text" name="info" onChange={textInput} /> 
            <br/><br/>

        </div>
    );
};
export default BComp2;