import React from 'react'
import { useState, useEffect } from 'react';

const MyAppend = ({ code, name, memo, onChangeCode, onChangeName, onChangeMemo}) => {     //이벤트까지 받았다
  return (
    <div>
        <b>MyAppend.jsx </b><br />
        코드 : <input type="text" onChange={onChangeCode} value={code} /> <br />
        이름 : <input type="text" onChange={onChangeName} value={name} /> <br />
        메모 : <input type="text" onChange={onChangeMemo} value={memo} /> <br />
    </div>
  )
}
export default MyAppend
