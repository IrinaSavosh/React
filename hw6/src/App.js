import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Управление продуктами</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;