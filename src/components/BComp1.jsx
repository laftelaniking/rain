import React from 'react';
import { student , students } from '../data/data';
import Student from './Student';

const BComp1 = () => {
    return (
        <div>
            {/* <p>이름 : {student.name} , 나이 : {student.age}, 주소 : {student.addr}</p> */}

            <Student msg={student}/>
            <br/>

            { 
               students.map(s => ( <Student msg={s} /> )) // map은 for문
            }

           <br />
        </div>
    );
};

export default BComp1;