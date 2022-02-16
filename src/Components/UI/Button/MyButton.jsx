import React from 'react';
import style from './Mybutton.module.css';

function Mybutton({children, ...props}) {
   
    return (
        <button {...props} className={style.btn}>
            {children}
        </button>
    )
}

export default Mybutton
