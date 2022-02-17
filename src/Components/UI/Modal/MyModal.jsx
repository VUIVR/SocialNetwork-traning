import React from 'react'
import st from './MyModal.module.css'

function MyModal({children, visible, setVisible}) {
     
const rootClases = [st.myModal]
if (visible) {
    rootClases.push(st.active)
}

  return (
    <div className={rootClases.join(' ')} onClick={()=>setVisible(false)}  >
        <div className={st.modalContent} onClick={e=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default MyModal

