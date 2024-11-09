import React from "react";

function Hello(props) {
    return (
        <div>
            Hello.jsx 받는 쪽 <br/>
            넘어온 제목 <span style={{color:props.color}}>  {props.title} </span>입니다
        </div>
    )
}

export default Hello;