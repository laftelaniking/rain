import  main from '../img/main_4.jpg';
import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <h1>Home.jsx 영역</h1>
            <img src={main}  width='300'  height='100'/> <p>  </p>
        </div>
    );
};
export default Home;