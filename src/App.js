import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';
import MainCart from "./components/Cart/MainCart";

import Footer from './components/Footer/Footer';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //use state for more than one conditions| here, to show or not show carts 
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [cartIsClicked, setcartIsClicked] = useState(false);
  const showCartClickHandler = () => {
    setcartIsClicked(true);
  };
  return (
    <Fragment>
<Header/>

{!cartIsClicked &&<Body onShowPopUp={showCartHandler} />}
{!cartIsClicked && cartIsShown &&<Cart onClose={hideCartHandler} onShowMainCart={showCartClickHandler}/>}
{cartIsClicked && <MainCart/>}
<Footer/>
    </Fragment>
    
  );
}

export default App;
