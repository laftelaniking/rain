import React from 'react';
import { useParams } from 'react-router-dom';

const Param1 = () => {

    const { id } = useParams()

    return (
        <div className='comp param1'>
            <h3>Param1.jsx  요청id : {id}</h3>
        </div>
    );
};

export default Param1;