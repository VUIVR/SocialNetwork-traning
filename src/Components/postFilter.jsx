import React from 'react'
import MyImput from './UI/input/MyInput'
import MySelect from './UI/Select/MySelect'


function PostFilter({filter, setFilter}) {
  return (
         <>
         <MySelect
         value={filter.sort}
         onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
         defaultValue='Сортировка'
         options={[
           { value: 'title', name: 'по названию' },
           { value: 'body', name: 'по описанию' }
         ]}
       />
       
       <MyImput
         value={filter.query}
         onChange={e => setFilter({...filter, query: e.target.value})}
         placeholder='Поиск'
       />
       
       </>
  )
}

export default PostFilter