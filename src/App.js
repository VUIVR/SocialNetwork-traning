import React, { useState } from 'react';
import PostList from './Components/PostList';




function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Firth head', body: 'body firth' },
    { id: 2, title: 'head', body: 'body sec' },
    { id: 3, title: 'asdad', body: 'body tree' }
])


  return (
    <div className='App'>
      <PostList posts={posts} title='Список постов JS'/>
     
    </div>
  );
}

export default App;


