import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../Components/UI/Loader/Loader'
import { useFetching } from '../Hooks/useFetching'




function SinglePost() {
  const PostId = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])


  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)

  })

  const [fetchGetComments, isLoadingComments, errorComments] = useFetching(async (id) => {
    const response = await PostService.getComments(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(PostId.id)
    fetchGetComments(PostId.id)
  }, [])

  return (
    <div className='App'>

      {isLoading
        ? <Loader />
        : <>
          <h3>{post.id}.{post.title}</h3>
          <div>{post.body}</div>
        </>
      }
      <div>
        <h3>Comments</h3>
        {isLoadingComments
          ? <Loader />
          : <div>
            {comments.map(comm =>
              <div key={comm.id}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            )}
          </div>
        }
      </div>
    </div>)
}

export default SinglePost