import React, { useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import MyImput from './Components/UI/input/MyInput';
import MySelect from './Components/UI/Select/MySelect';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: '1111', body: '2body firth' },
    { id: 2, title: '2222', body: '3body sec' },
    { id: 3, title: '3333', body: '1body tree' }
  ])

  const [selectedSort, setSelectedSort] = useState('')

  function sortPosts(sort) {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => (a[sort].localeCompare(b[sort]))))
  }

  function createPost(newPost) { /* добавляет новый пост в массив постов */
    setPosts([...posts, newPost])
  }

  const removePost = (post) => { /* удаляет пост из массива постов */
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>

      {/* создание поста */}
      <PostForm create={createPost} /> {/* форма создания поста */}

      <hr/>
      {/* Сортировка */}
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' }
        ]}
      />

      
      {/* ПОИСК */}
      <MyImput
        placeholder='Поиск'
      />



      {/* блок вывода постов */}
      <hr/>
      {posts.length
        ? <PostList removePost={removePost} posts={posts} title='Список постов JS' /> /* вывод всех постов */
        : <div className='post'>Посты не найдены </div>
      }

    </div>
  );
}

export default App;


