import React from 'react'
import { useState } from 'react'


//rfce입력=function타입으로 생성됨
//rafce입력 = 화살표function타입으로 생성
function MyBoard() {
    
  const developer = {
    nick: 'kim',
    age: 25,
  }


  const { nick, age } = developer;
  const [ count, setCount ] = useState(100);
  const [ color, setColor ] = useState("red");

  return (
    <div>
      MyBoard.jsx 파일 <br></br>
      이름 : {nick} <br></br>
      나이 : {developer.age} <p></p>   {/*developer.age 접근 */}

      count :  {count} <br></br>
            <button onClick={()=>{setCount(count+1)}}>증가</button>
            <button onClick={()=>{setCount(count-1)}}>감소</button>
            <br/>

      <p style={{background:color, color:"white"}}>안녕하세요</p>
      <button onClick={()=>setColor("orange")}>오렌지</button>
      <button onClick={()=>setColor("blue")}>파랑</button>
      <button onClick={()=>setColor("green")}>초록</button>
    </div>
  )
}
export default MyBoard