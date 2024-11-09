import React from 'react';

const Student = (props) => { //props는 특성  안에 여러정보가 들어있음

    // props : (prop)ertie(s) <img src필수속성 width height등은 선택>
    // 부모(상위) 컴포넌트에서 자식(하위)컴포넌트로 파라미터를 전달
    // 구조분해 할당방식
    const { name, age, addr } = props.msg;
    
    return (
        <div className='student'>
            <p>이름 : {name} , 나이 : {age}, 주소 : {addr}</p>
        </div>
    );
};

export default Student;