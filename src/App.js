import "./App.css";
import {useReducer, useState} from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Cart from "./components/Cart/Cart";
import reducer from "./reducers";
import MainCart from "./components/Cart/MainCart";
import Modal from "./components/Cart/Modal";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //use state for more than one conditions| here, to show or not show carts
  const [state, dispatch] = useReducer(reducer);
  const [showCartPage, setShowCartPage] = useState(false);
  const showCartHandler = (data) => {
    dispatch({type: "addToCart", data: data});
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <Header onCartClick={() => setShowCartPage(!showCartPage)} />
      <Body onShowPopUp={showCartHandler} />
      {showCartPage && (
        <Modal onClose={() => setShowCartPage(!showCartPage)}>
          <MainCart />
        </Modal>
      )}
      {cartIsShown && <Cart onClose={hideCartHandler} data={state} />}
    </div>
  );
}

export default App;
