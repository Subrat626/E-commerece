import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './Components/ProductCard';

function App() {
  const [proData, setProData] = useState([]);
  const [category, setCategory] = useState([]);
  const [originalData, setOriginalData] = useState([]);


  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOriginalData(data.products)
        setProData(data.products);
        setCategory([...new Set(data.products.map(data => data.category))]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (selectedCategory) => {
    const filteredProducts = originalData.filter(product => product.category === selectedCategory);
    setProData(filteredProducts);
  }
  return (
    <>
      <div className='categories'>
        {category.map(cat => (
          <span key={cat} className='category' onClick={() => handleFilter(cat)}>{cat}</span>
        ))}
      </div>
      <div className="App">
        {proData.map(product => (
          <ProductCard
            key={product.id}
            src={product.images[0]}
            title={product.title}
            desc={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
