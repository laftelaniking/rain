import React from 'react';
import { Link } from 'react-router-dom';

//rsc를 작성하면 자동으로 코드가 작성된다.
const Header = () => {
    return (
        <div className='header'>
            {/* a태그 대신 Link태그 사용 */}
            {/* href속성 대신 to 속성 사용 */}
            {/* pip install 'react-router-dom' 라이브러리 설치 */}
            <Link to="/">Home</Link>
            <Link to="/mytest">mytest</Link>
            <Link to="/mybts">mybts</Link>
            <Link to="/myboard">myboard</Link>
            <Link to="/mystar">mystar</Link>
            
        </div>
    );
};
export default Header;