import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const BASE2_URL = 'http://localhost:8080/categories/';
  const BASE_URL = 'http://localhost:8080/drinks/';
  const API_KEY = '360';
  useEffect(() => {
    fetch(`${BASE_URL}?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData([...res]));
    fetch(`${BASE2_URL}?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData2([...res]));
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
