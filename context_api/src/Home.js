import React, {useContext} from 'react'
import Feed from './Feed'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchResults, search, posts} = useContext(DataContext)
  console.log(searchResults)
  return (
    <div>
        {searchResults.length ? (
            <Feed posts={searchResults}/>
        ) : (
            <>
              <p style={{marginTop: '35px', textAlign: 'center'}}>
                {posts.length ? `No posts matched with "${search}"` : (
                  <>
                    No posts
                    {<Link to={'/post'}><p style={{marginTop: '15px', textAlign: 'center'}}>Add a Post</p></Link>}
                  </>
                )}
              </p>
            </>
        )}
        {/* {!posts.length && 
          <Link to={'/post'}><p style={{marginTop: '15px', textAlign: 'center'}}>Add a Post</p></Link>
        } */}
    </div>
  )
}

export default Home