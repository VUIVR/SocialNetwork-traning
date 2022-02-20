import React from 'react'
import { getPagesArray } from '../../../Utils/pages'

function Pagination({page, totalPages, changePage}) {
    let pagesArray = getPagesArray(totalPages)  //массив из количества страниц
  return (
    <div className='pages__wrapper'>
        {pagesArray.map(p =>
          <span
            onClick={() => changePage(p)}
            key={p}
            className={p === page ? "pages page__current" : "pages"}>
            {p}
          </span>)}
      </div>
  )
}

export default Pagination