import { useEffect, useState } from 'react';
import './App.css';
import Comments from './Comments';
import Posts from './Posts';
import Users from './Users';
import Content from './Content';

function App() {
  const [quarry, setQuarry] = useState("users");
  const [data1, setData1] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoadind, setIsLoadind] = useState(true);
  const [isClicked, setIsClicked] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${quarry}`);
        if(!response.ok) throw Error("Unable to fetch data, Please try again!!!")
        const data = await response.json();
        setData1(data);  // Update state with fetched data
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      } finally{
        setIsLoadind(false)
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000)

    // console.log(isClicked);
    
  }, [quarry]);
  console.log(data1[0])



  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <Users setQuarry={setQuarry} setIsLoadind={setIsLoadind} isClicked={isClicked} setIsClicked={setIsClicked}/>
        <Posts setQuarry={setQuarry} setIsLoadind={setIsLoadind} isClicked={isClicked} setIsClicked={setIsClicked}/>
        <Comments setQuarry={setQuarry} setIsLoadind={setIsLoadind} isClicked={isClicked} setIsClicked={setIsClicked}/>
      </div>
      <main>
        {isLoadind && <p style={{textAlign: 'center', marginTop: '10px'}}>Loading data...</p> || fetchError && <p style={{textAlign: 'center', color: 'red', marginTop: '10px'}}>{`Error: ${fetchError}`}</p>}
        {/* {fetchError && <p style={{textAlign: 'center', color: 'red', marginTop: '10px'}}>{`Error: ${fetchError}`}</p>} */}
        {!fetchError && !isLoadind && 
          <Content data1={data1} quarry={quarry}/>
        }
      </main>
    </div>
  );
}

export default App;
