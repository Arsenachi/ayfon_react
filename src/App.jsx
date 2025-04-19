import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart';

export default function App() {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then(res => res.json())
      .then((res) => setData(res.products));
  }, [searchValue])
  return (
    <div>
      <h1>Shop</h1>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <div className="products__container">
        {data.map((elm)=> <Cart img={elm.images[0]} title={elm.title} price={elm.price} category={elm.category}/>)}
      </div>
    </div>
  );
}
