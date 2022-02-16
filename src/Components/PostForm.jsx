import React,{useState} from 'react'
import MyImput from './UI/input/MyInput';
import Mybutton from './UI/Button/MyButton';

function PostForm({create}) {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <MyImput
                type='text'
                placeholder='Заголовок поста'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />

            <MyImput
                type='text'
                placeholder='Текст поста'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <Mybutton onClick={addNewPost}>Добавить пост</Mybutton>
        </form>
    )
}

export default PostForm