import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
    console.log(posts)
  return (
    <div>
        {posts.length ? (
            <Feed posts={posts}/>
        ) : (
            <p style={{marginTop: '35px', textAlign: 'center'}}>No posts to display.</p>
        )}
    </div>
  )
}

export default Home