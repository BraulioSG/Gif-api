import React, {useState} from 'react'
import './App.css';

import Searchbar from './components/Searchbar'
import Image from './components/Image'


function App() {
  const [data, setData] = useState({});
  return (
    <div className="App">
      <Searchbar setData={setData}/>
      <div className='imageSection'>
        {data.length > 0 ? data.map(img => <Image imageInfo={img}/>) : <img  className="notFoundImg" src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png"></img>}
      </div>
    </div>
  );
}

export default App;
