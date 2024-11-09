import React from 'react'

function Jeju ({place,picture,rating})  {
    const tripPlace = [
        {
          place: "Jeju",
          image: "https://cdn.crowdpic.net/list-thumb/thumb_l_319B5AA716BAB8C7AACB2D52875E6DD4.jpg",
          rating:4.9,
        },
        {
          place: "London",
          image: "https://a.cdn-hotels.com/gdcs/production68/d1303/c8fa75d8-6932-459b-9660-8340f097ebd7.jpg",
          rating:2.1,
        },
        {
          place: "America",
          image: "https://image.theminda.com/data/tg/image/item/high/201906/a6f59222e5a21779ec7522ceb6e09319.jpg",
          rating:5,
        },
      ];

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