import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../redux/productSlice';

const EditProduct = ({ product, updateProduct, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedProduct(prevProduct => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(editedProduct.price) < 0) {
      alert('Цена не может быть отрицательной');
      return;
    }
    updateProduct({...editedProduct, price: parseFloat(editedProduct.price)});
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-product-form">
      <input
        type="text"
        name="name"
        value={editedProduct.name}
        onChange={handleChange}
        placeholder="Название продукта"
        required
      />
      <textarea
        name="description"
        value={editedProduct.description}
        onChange={handleChange}
        placeholder="Описание продукта"
        required
      />
      <input
        type="number"
        name="price"
        value={editedProduct.price}
        onChange={handleChange}
        placeholder="Цена"
        min="0"
        step="0.01"
        required
      />
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="available-edit"
          name="available"
          checked={editedProduct.available}
          onChange={handleChange}
        />
        <label htmlFor="available-edit">Доступен</label>
      </div>
      <button type="submit">Сохранить изменения</button>
      <button type="button" onClick={onClose}>Отмена</button>
    </form>
  );
};

export default connect(null, { updateProduct })(EditProduct);