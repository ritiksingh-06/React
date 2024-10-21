import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from './context/DataContext';
import {useNavigate} from 'react-router-dom';
import {format} from 'date-fns'
import api from './api/posts';

const EditPost = () => {

    const {posts, setPosts} = useContext(DataContext);

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate()


    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatedPost = {id, title: editTitle, datetime, body: editBody};
        try{
          const response = await api.put(`/posts/${id}`, updatedPost)
          setPosts(posts.map(post => post.id === id ? {...response.data} : post));
          setEditTitle('');
          setEditBody('');
          navigate('/');
        }catch(error){
          console.log(`Error: ${error.message}`)
        }
    }


    const {id} = useParams();
    const post = posts.find(post => (post.id) === id );

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [posts, setEditTitle, setEditBody])

  return (
    <main className='newPost'>
        {editTitle && 
            <>
                <h2>New Post</h2>
                <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='postTitle'>Title:</label>
                    <input 
                        id='postTitle'
                        type='text'
                        required
                        autoFocus
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    /> <br/>
                    <br/>
                    <label htmlFor='postBody'>Post:</label>
                    <textarea 
                        id='postBody'
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {!editTitle &&
            <>
                <h2 style={{textAlign: 'center', marginTop: '35px'}}>Post not Found</h2>
                <Link to={'/'}><p style={{textAlign: 'center', marginTop: '15px', textDecoration:'underline', color: 'purple'}}>Go to Home.</p></Link>
            </>
        }
    </main>
  )
}

export default EditPost