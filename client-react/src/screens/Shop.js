import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import '../App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await  fetch('http://localhost:3001/products');

        const items = await data.json()
        console.log(items);
        setItems(items);
    };

    return (
        <div id='LeftBlack'>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`shop/${item.id}`}>{item.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;