import React from 'react'

const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
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