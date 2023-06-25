import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';


function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  function showcartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div><Cart onClose={hideCartHandler}/></div>}
      <Header onShowCart={showcartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
