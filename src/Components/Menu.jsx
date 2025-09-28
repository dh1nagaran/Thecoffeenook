import React, { useState } from 'react';
import useConn from '../Database/dataconn';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Database/CartSlice';
import { useNavigate } from 'react-router-dom';
import { SiBuymeacoffee } from "react-icons/si";
import '../Media.css';
import product from '../Database/Data.json'
const Menu = () => {
  const { products, load } = useConn();
  const [selectedCategory, setSelectedCategory] = useState("All");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const carts = useSelector((state) => state.cart);

  const adddata = (product) => {
    dispatch(addItem(product));
    navigate("/cart");
  };


  const categories = ["All", ...new Set(product.map((p) => p.category))];
  console.log(categories)
  const filteredProducts = selectedCategory === "All" ? product : product.filter((p) => p.category === selectedCategory);
  return (
    <div className='menu-container'>
      <div className="mini-contain" style={{ textAlign: "end" }}>
        <p>{carts.length}</p>
        <SiBuymeacoffee
          style={{
            width: "50px",
            height: "50px",
            color: "white",
            marginRight: "30px",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/cart")}
        />
      </div>

      <div className="category-buttons" style={{ textAlign: "center", marginBottom: "20px" }}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)} className='filter-menu'>
            {cat}
          </button>
        ))}
      </div>


      <div className='menu-conatiner-2'>
        {filteredProducts.map((product, id) => (
          <div key={id} className='menu-contain'>
            <div className='menu-conatin-img'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='menu-contian-details'>
              <h5>{product.category}</h5>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>Price : {product.price} $</h4>
              <button onClick={() => adddata(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
