import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import plants from '../data/plants';
import Header from './Header';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems(prev => new Set(prev).add(plant.id));
  };

  const categories = ['Succulents', 'Ferns', 'Flowering'];

  return (
    <div>
      <Header />
      <div className="product-listing">
        {categories.map(category => (
          <div key={category} className="category">
            <h2>{category}</h2>
            <div className="plants">
              {plants.filter(plant => plant.category === category).map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.has(plant.id)}
                  >
                    {addedItems.has(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;