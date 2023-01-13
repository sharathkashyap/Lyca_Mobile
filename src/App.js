import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //use state for more than one conditions| here, to show or not show carts 
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
<Header/>

<Body onShowPopUp={showCartHandler}/>
{cartIsShown &&<Cart onClose={hideCartHandler}/>}
    </div>
    
  );
}

export default App;
