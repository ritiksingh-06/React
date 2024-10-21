import {createContext, useState, useEffect} from 'react';
import api from '../api/posts';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

    

    return (
        <DataContext.Provider value={
            {posts, setPosts, search, setSearch, searchResults}
        }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;