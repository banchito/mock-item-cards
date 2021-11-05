import React, {useState, useEffect} from 'react';
import {fetchItems} from '../api'
import ItemList from './ItemList';
import '../css/app.css';

export default function App() {

    const [items, setItems] = useState([])

    useEffect(()=>{
        Promise.all([fetchItems()])
        .then(([items])=>{
            setItems(items) 
        })
        .catch(error => {console.log(error)})
    }, [])
    
    return (
        <div className="app__body">
            <ItemList items={items}/>
        </div>
    )
}
