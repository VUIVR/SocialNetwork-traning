import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'



function PostList({ posts, title, removePost }) {
    if (!posts.length) {
        return (
            <div style={{ textAlign: 'center' }}>Посты не найдены</div>
        )
    }

    return (
        <div>
            <h1>{title}</h1>

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            number={index + 1}
                            post={post}
                            remove={removePost}
                        />
                    </CSSTransition>


                )}
            </TransitionGroup>

        </div>
    )
}

export default PostList