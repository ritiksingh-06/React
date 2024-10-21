import React, {useContext, useState} from 'react'
import DataContext from './context/DataContext'
import api from './api/posts'
import {useNavigate} from 'react-router-dom';
import {format} from 'date-fns'

const NewPost = () => {

  const {posts, setPosts} = useContext(DataContext)

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = (posts.length ? Number(posts[posts.length -1].id) + 1 : 1).toString();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title: postTitle, datetime, body: postBody}
    try{
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      navigate('/') 
    }catch(error){
      console.log(`Error: ${error.message}`)
    }
  }
  
  return (
    <main className='newPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor='postTitle'>Title:</label>
            <input 
                id='postTitle'
                type='text'
                required
                autoFocus
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            /> <br/>
             <br/>
            <label htmlFor='postBody'>Post:</label>
            <textarea 
                id='postBody'
                required
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            />
            <br/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost