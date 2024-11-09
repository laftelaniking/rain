
import React from 'react'
function Wrapper({children}) {  //function Wrapper() { children키워드가 없으면 네모난박스만 출력 }
    const style = {
        border: "2px solid black",
        marginLeft: "20px",
        marginTop: "20px",
        padding: "30px",
        backgroundColor: '#abcdef'
    };

    return (
        <div style={style}>
            {children}<p></p>
        </div>
    )
}export default Wrapper