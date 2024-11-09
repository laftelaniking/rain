import React, { Component } from 'react'


//rce입력 
export class MyTest extends Component {
static  defaultProps = { book:'고희동',  price:2700 };


  render() {
    const mystyle =  { fontSize: '14pt' , color:'green', fontWeight:'bold' };
    const { book ,  price } = this.props ;
    return (
      <div style={mystyle}>
        MyTest  밀로커피  <br></br>
        제목 : {this.props.book}  <br></br>
        가격 : {this.props.price}  <br></br>
        제목 : {book}  <br></br>
        가격 : {price}  <br></br>
      </div>
    )
  }
}
export default MyTest