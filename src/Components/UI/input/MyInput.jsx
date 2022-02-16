import React from 'react'
import st from './MyInput.module.css'

const MyImput = (props) => {
  return (
    <input  {...props} className={st.input}></input>
  );
}

export default MyImput