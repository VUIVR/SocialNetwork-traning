import React from 'react'
import PostItem from './PostItem'



function PostList(props) {

    return (<>
        <h1>{props.title}</h1>
        {props.posts.map((post, index) =>
            <PostItem
                number={index + 1}
                post={post}
                key={post.id}
            />)}
    </>
    )
}

export default PostList