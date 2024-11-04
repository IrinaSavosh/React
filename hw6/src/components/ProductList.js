import React from 'react';
import { connect } from 'react-redux';
import { removeProduct, toggleAvailability } from '../redux/productSlice';

const ProductList = ({ products, removeProduct, toggleAvailability }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {parseFloat(product.price).toFixed(2)}</p>
          <p>Статус: {product.available ? 'Доступен' : 'Недоступен'}</p>
          <button onClick={() => toggleAvailability(product.id)}>
            {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
          </button>
          <button onClick={() => removeProduct(product.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps, { removeProduct, toggleAvailability })(ProductList);