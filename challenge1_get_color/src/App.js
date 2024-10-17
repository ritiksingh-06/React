import { useState } from 'react';
import './App.css';
import Input from './Input';
import Square from './Square';

function App() {

  const [colorValue, setColorValue] = useState("")

  return (
    <div className="App">
      <Square colorValue={colorValue}/>
      <Input colorValue={colorValue} setColorValue={setColorValue}/>
    </div>
  );
}

export default App;
