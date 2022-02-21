import React from 'react';
import { Link } from 'react-router-dom';

import st from './post.module.css'
import Mybutton from '../UI/Button/MyButton';



function PostItem(props) {
    
    return (
        <div className={st.post}>
            <div>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div>
                <Link to={`/Posts/${props.post.id}`} ><Mybutton >Open</Mybutton></Link>  
                <Mybutton onClick={() => { props.remove(props.post) }} >Delete</Mybutton>
            </div>
        </div>
    )
}

export default PostItem
