
import ProductList from './ProductList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
import { CartContext } from './CartConctext';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])


  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Link to='/' style={{margin: 'auto'}}>Home Page</Link>
        <Link to='/checkout' style={{margin: 'auto'}}>Shopping Cart</Link>


        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product" element={<ProductDetails />}>
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path='*' element={<div style={{ margin: 'auto', fontSize: '40px' }}>404 not found...</div>} />
        </Routes>

      </CartContext.Provider>


    </BrowserRouter>
  );
}

export default App;
