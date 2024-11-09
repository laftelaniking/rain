import React from 'react'


//rfce입력=function타입으로 생성됨
//rafce입력 = 화살표function타입으로 생성
//rsc입력 상수const 생성
const Starts = () => {
  const name ='희동' ;

  
  const mystyle = {
    color : "yellow",
    backgroundColor : "black",
    fontSize : "20px",
    fontWeight : "bold",
    padding : "4px"
  }

  return (
    <div>
        MyStar.jsx 파일 <br></br>
        <h3 style={mystyle}> {name} 환영합니다</h3>
    </div>
  )
}
export default Starts