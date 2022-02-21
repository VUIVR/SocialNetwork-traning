import React, { useState, useEffect } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../Components/Posts/postFilter';
import PostForm from '../Components/Posts/PostForm';
import PostList from '../Components/Posts/PostList';
import Mybutton from '../Components/UI/Button/MyButton';
import Loader from '../Components/UI/Loader/Loader';
import MyModal from '../Components/UI/Modal/MyModal';
import Pagination from '../Components/UI/Pagination/Pagination';
import MySelect from '../Components/UI/Select/MySelect';
import { useFetching } from '../Hooks/useFetching';
import { usePosts } from '../Hooks/usePosts';
import { getPagesCount, getPagesArray } from '../Utils/pages';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  // достает посты с сервера + обработка ошибок
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [limit])

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  /* добавляет новый пост в массив постов */
  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  /* удаляет пост из массива постов */
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className='App'>

      <Mybutton onClick={() => setModal(true)} >
        Создать пост
      </Mybutton>

      {/*всплывающее окно для создание поста */}
      <MyModal
        visible={modal}
        setVisible={setModal}>
        <PostForm create={createPost} /> {/* форма создания поста */}
      </MyModal>

      <hr />
      {/* блок сортировки и поиска */}
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        defaultValue='Кол-во постов на странице'
        value={limit}
        onChange={value => setLimit(value)}
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 20, name: '20' },
          { value: -1, name: 'Все' },
        ]}
      />

      {/* блок вывода постов */}
      <hr />
      {postError && <h1>Произошла ошибка</h1>}

      {isPostsLoading
        ? <Loader />
        : <PostList removePost={removePost} posts={sortAndSearchPosts} title='Список постов JS' />
      }
      <Pagination
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;


