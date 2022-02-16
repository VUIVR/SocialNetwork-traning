import React, {  useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Firth head', body: 'body firth' },
    { id: 2, title: 'head', body: 'body sec' },
    { id: 3, title: 'asdad', body: 'body tree' }
  ])

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Список постов JS' />

    </div>
  );
}

export default App;


