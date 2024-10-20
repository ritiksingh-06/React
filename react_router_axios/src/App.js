import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {format} from 'date-fns'
import api from './api/posts';


function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }else{
          console.log(`Error: ${error.message}`)
        }
      }
    }
    fetchPosts();
  }, [])

  useEffect (() => {
    const filteredResults = posts.filter(post => 
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    
    setSearchResults(filteredResults)
  },[posts, search])


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

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`)
      const postLists = posts.filter(post => post.id !== id);
      setPosts(postLists);
      navigate('/')
    }catch(error){
      console.log(`Error: ${error.message}`)
    }
  }

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

  return (
    <div className="App">
      <Header/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} posts={posts} search={search} />} />
        <Route path='/about' element={<About />}/>
        <Route path='/post' element={<NewPost postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit}/>}/>
        <Route path='/edit/:id' element={<EditPost posts={posts} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} handleEdit={handleEdit}/>}/>
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
