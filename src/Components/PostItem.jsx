import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/app.css'
import Mybutton from './UI/Button/MyButton';


function PostItem(props) {
    
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <Link to={`/Posts/${props.post.id}`}><Mybutton>Open</Mybutton></Link>  
                <Mybutton onClick={() => { props.remove(props.post) }}>Delete</Mybutton>
            </div>
        </div>
    )
}

export default PostItem
