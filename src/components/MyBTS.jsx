import React from 'react'
import { useState } from 'react'

//rfce입력=function타입으로 생성됨
function MyBTS() {
  const [name, SetName] = useState('./images/bt.png') ;
  const [title, SetTitle] = useState('./images/tree.png') ;
  const [num, SetNum] = useState(237) ;

  return (
    <div>
        MyBTS <br></br>
        <img src={name}   width='150' height='100' />  &nbsp;
        <img src={title}   width='150' height='100' />  <br></br>
        숫자 {num} 입니다
    </div>
  )
}

export default MyBTS