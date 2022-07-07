import React, { useState } from 'react'; 
import './Searchbar.css'


const apiUrl = (keyword) => {
    return `https://api.giphy.com/v1/gifs/search?api_key=sdgta6HS0MIa3pvsibT62SfFGtDs5xGm&q=${keyword}&limit=10&offset=0&rating=G&lang=en`
}

async function getGiffs(query){
    const response = await Promise.resolve(fetch(apiUrl(query)))
    const { data } = await response.json();
    const gifs = data.map(image => image.images.downsized_medium)
    return gifs
}

function useInput(){
    const [query, setQuery] = useState('');

    const updateQuery = async (event, setData) => {
        const result = await getGiffs(event.target.value);
        setQuery(result);
        setData(query);
    }
    return {
        query,
        updateQuery
    }
}





function Searchbar({setData}){
    const { query, updateQuery } = useInput();
    
    return (
        <div className='searchbar'>
            <h1>Giff Search</h1>
            <input onChange={event => updateQuery(event, setData)}></input>
        </div>
    );
}

export default Searchbar