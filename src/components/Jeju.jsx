import React from 'react'

function Jeju ({place,picture,rating})  {
    
  return (
    <div>
        Jeju.jsx <br />
        {place} 여행하고 싶네요 <br></br>
        {rating}/5.0  <br></br>
        <img src={picture} width='300' height='150' /> <p></p><br></br>
    </div>
  )
}
export default Jeju