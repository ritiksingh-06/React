import { useState } from 'react';
import AddItem from './AddItem';
import './App.css';
// import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import List_keys from './List_keys';
import SearchItem from './SearchItem';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")));
  
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    console.log(JSON.parse(localStorage.getItem("shoppinglist")));
  }

  const handleCheck = (id) =>{
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
      // console.log(items)
      // console.log(...items);
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
      console.log(localStorage.getItem("shoppinglist"))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem("")
  }


  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}  
      />
      <SearchItem
          search={search}
          setSearch={setSearch}
      />
      <List_keys
          title='Your list is empty'
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
      />
      <Footer/>
    </div>
  );
}

export default App;
