import React from 'react';
import '../Styles/app.css'
import Mybutton from './UI/Button/MyButton';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <Mybutton>Delete</Mybutton>
            </div>
        </div>
    )
}

export default PostItem
