import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostPage = ({posts, handleDelete}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='postPage'>
        <article className='post'>
            {post &&
                <>
                    <h2>{post.title}</h2>
                    <p className='postDate'>{post.datetime}</p>
                    <p className='postBody'>{post.body}</p>
                    <button onClick={() => handleDelete(post.id)} >Delete Post</button>
                </>
            }
            {!post &&
            <>
                <h2 style={{textAlign: 'center', marginTop: '35px'}}>Post not Found</h2>
                <Link to={'/'}><p style={{textAlign: 'center', marginTop: '15px', textDecoration:'underline', color: 'purple'}}>Go to Home.</p></Link>
            </>}
        </article>
    </main>
  )
}

export default PostPage