import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/productSlice';

const AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', available: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(product.price) < 0) {
      alert('Цена не может быть отрицательной');
      return;
    }
    addProduct({ ...product, id: Date.now(), price: parseFloat(product.price) });
    setProduct({ name: '', description: '', price: '', available: false });
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Название продукта"
        required
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Описание продукта"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Цена"
        min="0"
        step="0.01"
        required
      />
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="available"
          name="available"
          checked={product.available}
          onChange={handleChange}
        />
        <label htmlFor="available">Доступен</label>
      </div>
      <button type="submit">Добавить продукт</button>
    </form>
  );
};

export default connect(null, { addProduct })(AddProduct);